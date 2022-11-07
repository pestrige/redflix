import { useQuery } from '@tanstack/react-query';

import { MovieService } from '@app/services';

export const useTrending = () => {
	const { isLoading, data: movies } = useQuery(['get-trending-movies'], () =>
		MovieService.getMostPopularMovies()
	);

	return { isLoading, movies };
};
