import { useQuery } from '@tanstack/react-query';

import { MovieService } from '@app/services';

export const useGetAllMovies = () => {
	const { data: movies, isLoading } = useQuery(
		['get-movies'],
		() => MovieService.getAllMovies(),
		{
			select: (data) => data.slice(0, 10)
		}
	);

	return { movies, isLoading };
};
