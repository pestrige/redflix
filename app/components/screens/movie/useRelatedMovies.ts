import { useQuery } from '@tanstack/react-query';

import { MovieService } from '@app/services';

export const useRelatedMovies = (
	genreIds: string[],
	currentMovieId: string
) => {
	return useQuery(
		['get-related-movies-by-genre', genreIds],
		() => MovieService.getMovieByGenres(genreIds),
		{
			select: (movies) =>
				movies.filter(({ _id }) => _id !== currentMovieId).slice(0, 5)
		}
	);
};
