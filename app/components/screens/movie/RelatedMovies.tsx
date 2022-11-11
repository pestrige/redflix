import { FC } from 'react';
import { ListRenderItemInfo, Text, View } from 'react-native';

import { HorizontalList, Loader, MovieCard } from '@app/components/ui';

import { Movie } from '@app/shared/types';

import { useRelatedMovies } from './useRelatedMovies';

interface RelatedMoviesProps {
	genreIds: string[];
	currentMovieId: string;
}

const RelatedMovies: FC<RelatedMoviesProps> = ({
	currentMovieId,
	genreIds
}) => {
	const { isLoading, data } = useRelatedMovies(genreIds, currentMovieId);

	if (isLoading) {
		return <Loader />;
	}
	if (!data?.length) {
		return null;
	}

	return (
		<View className='my-8'>
			<Text className='text-white text-2xl font-semibold mb-5'>
				Related movies
			</Text>

			<HorizontalList
				snapToInterval={160}
				data={data}
				renderItem={({ item: movie, index }: ListRenderItemInfo<Movie>) => (
					<MovieCard
						movie={movie}
						index={index}
						key={movie._id}
						style={{ width: 144, marginRight: 16 }}
					/>
				)}
			/>
		</View>
	);
};

export default RelatedMovies;
