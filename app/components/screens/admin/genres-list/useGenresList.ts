import { useMutation, useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import Toast from 'react-native-toast-message';

import { useSearchForm, useTypedNavigation } from '@app/hooks';

import { Genre, NavigateType, TableItem } from '@app/shared/types';

import { GenreService } from '@app/services';

const formatData = (genres: Genre[], navigate: NavigateType): TableItem[] =>
	genres.map((genre) => ({
		_id: genre._id,
		editNavigate: () => navigate('GenreEdit', { id: genre._id }),
		items: [genre.name, genre.slug]
	}));

export const useGenresList = () => {
	const { debouncedSearchTerm, control } = useSearchForm();
	const { navigate } = useTypedNavigation();

	const queryData = useQuery(
		['get-genres-list', debouncedSearchTerm],
		() => GenreService.getAllGenres(debouncedSearchTerm),
		{ select: (genres) => formatData(genres, navigate) }
	);

	const { mutateAsync: createGenreAsync } = useMutation(
		['create-genre'],
		() => GenreService.createGenre(),
		{
			onSuccess: async (id) => {
				Toast.show({
					type: 'success',
					text1: 'Create genre',
					text2: 'create was successful'
				});
				navigate('GenreEdit', { id });
			}
		}
	);

	const { mutateAsync: deleteGenreAsync } = useMutation(
		['delete-genre'],
		(id: string) => GenreService.deleteGenre(id),
		{
			onSuccess: async () => {
				Toast.show({
					type: 'success',
					text1: 'Delete genre',
					text2: 'delete was successful'
				});
				await queryData.refetch();
			}
		}
	);

	return useMemo(
		() => ({ control, ...queryData, deleteGenreAsync, createGenreAsync }),
		[control, queryData, deleteGenreAsync, createGenreAsync]
	);
};
