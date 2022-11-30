import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { SubmitHandler, UseFormSetValue } from 'react-hook-form';
import Toast from 'react-native-toast-message';

import { useTypedRoute } from '@app/hooks';

import { UserEditInput } from '@app/shared/types';

import { UserService } from '@app/services';

export const useUserEdit = (setValue: UseFormSetValue<UserEditInput>) => {
	const { params } = useTypedRoute<'UserEdit'>();
	const userID = params.id;
	const queryCache = useQueryClient();

	const { isLoading } = useQuery(
		['get-user', userID],
		() => UserService.getUserByID(userID),
		{
			onSuccess: (data) => {
				setValue('email', data.email);
				setValue('isAdmin', data.isAdmin);
			},
			enabled: !!userID
		}
	);

	const { mutateAsync } = useMutation(
		['update-user', userID],
		(data: UserEditInput) => UserService.updateUser(userID, data),
		{
			onSuccess: async () => {
				Toast.show({
					type: 'success',
					text1: 'Update user',
					text2: 'update was successful'
				});

				await queryCache.invalidateQueries(['search-users']);
			}
		}
	);

	const onSubmit: SubmitHandler<UserEditInput> = async (data) => {
		await mutateAsync(data);
	};

	return { isLoading, onSubmit };
};
