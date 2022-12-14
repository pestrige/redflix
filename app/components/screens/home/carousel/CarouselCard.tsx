import { FC } from 'react';
import {
	Animated,
	Image,
	ImageStyle,
	Pressable,
	StyleProp,
	Text,
	View
} from 'react-native';

import { FavoriteButton, GenreList, Rating } from '@app/components/ui';

import { useTypedNavigation } from '@app/hooks';

import { Movie } from '@app/shared/types';

import { getMediaSource } from '@app/utils';

import { ITEM_SIZE, SPACING } from './carousel.constants';
import { useCardAnimation } from './useCardAnimation';

const imageStyle: StyleProp<ImageStyle> = {
	height: ITEM_SIZE * 1.3,
	resizeMode: 'cover',
	borderWidth: 1,
	borderColor: 'white'
};

interface CarouselCardProps {
	index: number;
	scrollX: Animated.Value;
	movie: Movie;
}

const CarouselCard: FC<CarouselCardProps> = ({ movie, scrollX, index }) => {
	const { navigate } = useTypedNavigation();
	const { rotate, opacity, scale, opacityInfoBlock } = useCardAnimation(
		index,
		scrollX
	);
	const wrapperStyle = {
		padding: SPACING,
		transform: [{ rotate }, { scale }],
		opacity
	};

	const handleMoviePress = () => navigate('Movie', { slug: movie.slug });

	return (
		<View style={{ width: ITEM_SIZE }}>
			<Animated.View style={wrapperStyle} className='items-center'>
				<Pressable className='w-full relative' onPress={handleMoviePress}>
					<View className='absolute z-1 right-2 top-2'>
						<FavoriteButton movieID={movie._id} />
					</View>
					<Image
						source={getMediaSource(movie.poster)}
						style={imageStyle}
						className='w-full rounded-xl mb-2.5'
					/>
				</Pressable>

				<Animated.View
					className='items-center'
					style={{ opacity: opacityInfoBlock }}
				>
					<Rating rating={movie.rating} />
					<Pressable onPress={handleMoviePress}>
						<Text
							numberOfLines={1}
							className='text-white text-3xl font-semibold opacity-95 mb-2.5'
						>
							{movie.title}
						</Text>
					</Pressable>
					<GenreList genres={movie.genres} />
				</Animated.View>
			</Animated.View>
		</View>
	);
};

export default CarouselCard;
