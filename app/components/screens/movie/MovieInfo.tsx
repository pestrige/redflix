import { FC } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';

import { DotIcon, GenreList, Rating } from '@app/components/ui';

import { Movie } from '@app/shared/types';

interface MovieInfoProps {
	movie: Movie;
}

const MovieInfo: FC<MovieInfoProps> = ({ movie }) => {
	const { title, rating, parameters, genres } = movie;

	return (
		<Animated.View className='px-6 mb-3 '>
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
