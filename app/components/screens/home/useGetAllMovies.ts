import { MovieService } from '@app/services';
import { useQuery } from '@tanstack/react-query';

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
