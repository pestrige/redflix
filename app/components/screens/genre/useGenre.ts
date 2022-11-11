import { useQuery } from '@tanstack/react-query';

import { useTypedRoute } from '@app/hooks';

import { MovieService } from '@app/services';
import { GenreService } from '@app/services/genre.service';

export const useGenre = () => {
	const { params } = useTypedRoute<'Genre'>();

	const { isLoading, data: genre } = useQuery(
		['get-genre-by-slug', params.slug],
		() => GenreService.getGenreBySlug(params.slug)
	);

	const genreID = genre?._id ?? '';
	const { isLoading: isMoviesLoading, data: movies } = useQuery(
		['get-movies-by-genre', genreID],
		() => MovieService.getMovieByGenres([genreID]),
		{ enabled: !!genreID }
	);

	return { isLoading: isLoading || isMoviesLoading, movies, genre };
};
