import { FC } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';

import { DotIcon, GenreList, Rating } from '@app/components/ui';

import { HEADER_HEIGHT } from './movie.constant';
import { MovieCommonProps } from './movie.interface';

const MovieInfo: FC<MovieCommonProps> = ({ movie, y }) => {
	const { title, rating, parameters, genres } = movie;
	const opacity = y.interpolate({
		inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT / 2],
		outputRange: [1, 1, 0]
	});

	return (
		<Animated.View className='px-6 mb-6' style={{ opacity }}>
			<Text
				className='text-5xl font-semibold mb-2 pr-2 text-[#F9FCFC]'
				numberOfLines={2}
			>
				{title}
			</Text>

			<View className='mb-4 flex-row items-center opacity-70'>
				<Rating rating={rating} size={18} />
				<DotIcon />
				<Text style={styles.text}>{parameters.duration} min.</Text>
				<DotIcon />
				<Text style={styles.text}>{parameters.year}</Text>
			</View>

			<GenreList genres={genres} />
		</Animated.View>
	);
};

const styles = StyleSheet.create({
	text: { color: 'white', marginHorizontal: 4, fontSize: 18 }
});

export default MovieInfo;
