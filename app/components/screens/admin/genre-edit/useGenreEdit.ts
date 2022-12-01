import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { SubmitHandler, UseFormSetValue } from 'react-hook-form';
import Toast from 'react-native-toast-message';

import { useTypedRoute } from '@app/hooks';

import { GenreEditInput } from '@app/shared/types';

import { GenreService } from '@app/services';

export const useGenreEdit = (setValue: UseFormSetValue<GenreEditInput>) => {
	const { params } = useTypedRoute<'GenreEdit'>();
	const genreID = params.id;
	const queryClient = useQueryClient();

	const { isLoading } = useQuery(
		['get-genre', genreID],
		() => GenreService.getGenreByID(genreID),
		{
			onSuccess: (data) => {
				setValue('name', data.name);
				setValue('slug', data.slug);
				setValue('description', data.description);
			}
		}
	);

	const { mutateAsync } = useMutation(
		['update-genre', genreID],
		(data: GenreEditInput) => GenreService.updateGenre(genreID, data),
		{
			onSuccess: async () => {
				Toast.show({
					type: 'success',
					text1: 'Genre edit',
					text2: 'update was successful'
				});

				await queryClient.invalidateQueries(['get-genres-list']);
			}
		}
	);

	const onSubmit: SubmitHandler<GenreEditInput> = async (data) => {
		await mutateAsync(data);
	};

	return { isLoading, onSubmit };
};
