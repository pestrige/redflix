import { useQuery } from '@tanstack/react-query';

import { useTypedRoute } from '@app/hooks';

import { MovieService } from '@app/services';

export const useMovie = () => {
	const { params } = useTypedRoute<'Movie'>();

	const { isLoading, data: movie } = useQuery(
		['get-movie-by-slug', params.slug],
		() => MovieService.getMovieBySlug(params.slug)
	);

	return { isLoading, movie };
};
