import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { SubmitHandler, UseFormSetValue } from 'react-hook-form';
import Toast from 'react-native-toast-message';

import { useTypedRoute } from '@app/hooks';

import { ActorEditInput } from '@app/shared/types';

import { ActorService } from '@app/services';

export const useActorEdit = (setValue: UseFormSetValue<ActorEditInput>) => {
	const { params } = useTypedRoute<'ActorEdit'>();
	const actorID = params.id;
	const queryClient = useQueryClient();

	const { isLoading } = useQuery(
		['get-actor', actorID],
		() => ActorService.getActorByID(actorID),
		{
			onSuccess: (data) => {
				setValue('name', data.name);
				setValue('slug', data.slug);
				setValue('photo', data.photo);
			}
		}
	);

	const { mutateAsync } = useMutation(
		['update-actor'],
		(data: ActorEditInput) => ActorService.updateActor(actorID, data),
		{
			onSuccess: async () => {
				Toast.show({
					type: 'success',
					text1: 'Update actor',
					text2: 'update was successful'
				});

				await queryClient.invalidateQueries(['get-actors-list']);
			}
		}
	);

	const onSubmit: SubmitHandler<ActorEditInput> = async (data) => {
		await mutateAsync(data);
	};

	return { isLoading, onSubmit };
};
