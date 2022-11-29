import { TypeRootStackParamList } from '@app/navigation/navigation.types';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import Toast from 'react-native-toast-message';

import { useSearchForm, useTypedNavigation } from '@app/hooks';

import { Movie, NavigateType, TableItem } from '@app/shared/types';

import { MovieService } from '@app/services';

const formatMovies = (movies: Movie[], navigate: NavigateType): TableItem[] =>
	movies.map((movie) => ({
		_id: movie._id,
		editNavigate: () => navigate('MovieEdit', { id: movie._id }),
		items: [
			movie.title,
			`${movie.genres[0]?.name ?? ''} ${movie.genres.length > 1 ? '...' : ''}`,
			`${movie.rating}`
		]
	}));

export const useMoviesList = () => {
	const { debouncedSearchTerm, control } = useSearchForm();
	const { navigate } = useTypedNavigation();

	const queryData = useQuery(
		['search-movies', debouncedSearchTerm],
		() => MovieService.getAllMovies(debouncedSearchTerm),
		{ select: (data) => formatMovies(data, navigate) }
	);

	const { mutateAsync: createMovieAsync } = useMutation(
		['create-movie'],
		() => MovieService.createMovie(),
		{
			onSuccess: async (id) => {
				Toast.show({
					type: 'success',
					text1: 'Create movie',
					text2: 'create was successful'
				});

				await navigate('MovieEdit', { id });
			}
		}
	);

	const { mutateAsync: deleteMovieAsync } = useMutation(
		['delete-movie'],
		(movieID: string) => MovieService.deleteMovie(movieID),
		{
			onSuccess: async () => {
				Toast.show({
					type: 'success',
					text1: 'Delete movie',
					text2: 'delete was successful'
				});
				await queryData.refetch();
			}
		}
	);

	return useMemo(
		() => ({ ...queryData, control, deleteMovieAsync, createMovieAsync }),
		[queryData, deleteMovieAsync, createMovieAsync]
	);
};
