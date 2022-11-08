import { useQuery } from '@tanstack/react-query';

import { MovieService } from '@app/services';

import { useSearchForm } from './useSearchForm';

export const useSearch = () => {
	const { debouncedSearchTerm, searchTerm, control } = useSearchForm();
	const { isLoading, data: movies } = useQuery(
		['search-movies', debouncedSearchTerm],
		() => MovieService.getAllMovies(debouncedSearchTerm),
		{ enabled: !!debouncedSearchTerm }
	);

	return { isLoading, movies, control, searchTerm };
};
