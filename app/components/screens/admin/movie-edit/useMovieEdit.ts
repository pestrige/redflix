import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { SubmitHandler, UseFormSetValue } from 'react-hook-form';
import Toast from 'react-native-toast-message';

import { useTypedRoute } from '@app/hooks';

import { MovieEditInput } from '@app/shared/types';

import { MovieService } from '@app/services';

export const useMovieEdit = (setValue: UseFormSetValue<MovieEditInput>) => {
	const { params } = useTypedRoute<'MovieEdit'>();
	const movieID = params.id;
	const queryClient = useQueryClient();

	const { isLoading } = useQuery(
		['get-movie', movieID],
		() => MovieService.getMovieByID(movieID),
		{
			onSuccess: (data) => {
				setValue('title', data.title);
				setValue('slug', data.slug);
				setValue('rating', data.rating);
				setValue('poster', data.poster);
				setValue('videoUrl', data.videoUrl);
				setValue('parameters.country', data.parameters?.country);
				setValue('parameters.duration', data.parameters?.duration);
				setValue('parameters.year', data.parameters?.year);
				setValue('actors', data.actors);
				setValue('genres', data.genres);
			}
		}
	);

	const { mutateAsync } = useMutation(
		['update-movie'],
		(data: MovieEditInput) => MovieService.updateMovie(movieID, data),
		{
			onSuccess: async () => {
				Toast.show({
					type: 'success',
					text1: 'Movie update',
					text2: 'update was successful'
				});

				await queryClient.invalidateQueries(['search-movies']);
			}
		}
	);

	const onSubmit: SubmitHandler<MovieEditInput> = async (data) => {
		await mutateAsync(data);
	};

	return { isLoading, onSubmit };
};
