import { FC, useRef } from 'react';
import {
	Animated,
	ListRenderItem,
	ListRenderItemInfo,
	Platform,
	View
} from 'react-native';

import { Movie } from '@app/shared/types';

import CarouselCard from './CarouselCard';
import { EMPTY_ITEM_SIZE, ITEM_SIZE } from './carousel.constants';

const Carousel: FC<{ movies: Movie[] }> = ({ movies }) => {
	const adaptedMoviesToAnimatedScroll = [
		{ _id: 'first' } as Movie,
		...movies,
		{ _id: 'last' } as Movie
	];
	const scrollX = useRef(new Animated.Value(0)).current;

	const handleScroll = Animated.event(
		[{ nativeEvent: { contentOffset: { x: scrollX } } }],
		{ useNativeDriver: true }
	);

	const renderListItem: ListRenderItem<Movie> = ({ item: movie, index }) =>
		movie.slug ? (
			<CarouselCard movie={movie} index={index} scrollX={scrollX} />
		) : (
			<View style={{ width: EMPTY_ITEM_SIZE }} />
		);

	return (
		<View>
			<Animated.FlatList
				data={adaptedMoviesToAnimatedScroll}
				keyExtractor={({ _id }) => `key ${_id}`}
				showsHorizontalScrollIndicator={false}
				horizontal={true}
				bounces={false}
				renderToHardwareTextureAndroid={true}
				scrollEventThrottle={16}
				decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
				contentContainerStyle={{ alignItems: 'center' }}
				snapToInterval={ITEM_SIZE}
				snapToAlignment='start'
				onScroll={handleScroll}
				renderItem={renderListItem}
			/>
		</View>
	);
};

export default Carousel;
