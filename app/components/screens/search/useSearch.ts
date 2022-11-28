import { useQuery } from '@tanstack/react-query';

import { useSearchForm } from '@app/hooks';

import { MovieService } from '@app/services';

export const useSearch = () => {
	const { debouncedSearchTerm, searchTerm, control } = useSearchForm();
	const { isLoading, data: movies } = useQuery(
		['search-movies', debouncedSearchTerm],
		() => MovieService.getAllMovies(debouncedSearchTerm),
		{ enabled: !!debouncedSearchTerm }
	);

	return { isLoading, movies, control, searchTerm };
};
