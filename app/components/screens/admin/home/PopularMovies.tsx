import { FC } from 'react';
import { Text, View } from 'react-native';

import { Block, MovieCard } from '@app/components/ui';

import { useTrending } from '@app/hooks';

const PopularMovies: FC = () => {
	const { isLoading, movies } = useTrending(2);

	return (
		<Block isLoading={isLoading} className='mt-6'>
			<Text className='text-2xl font-bold text-white text-center mb-2'>
				The most popular movies
			</Text>

			<View className='flex-row justify-between mt-2'>
				{movies?.map((movie, index) => (
					<View key={movie._id} style={{ width: '47%' }}>
						<MovieCard movie={movie} index={index} />
						<Text className='text-white text-center text-base mt  -2'>
							Opened {movie.countOpened} times
						</Text>
					</View>
				))}
			</View>
		</Block>
	);
};

export default PopularMovies;
