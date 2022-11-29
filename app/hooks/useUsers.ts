import { TypeRootStackParamList } from '@app/navigation/navigation.types';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import Toast from 'react-native-toast-message';

import { useSearchForm } from '@app/hooks/useSearchForm';
import { useTypedNavigation } from '@app/hooks/useTypedNavigation';

import { NavigateType, TableItem, User } from '@app/shared/types';

import { UserService } from '@app/services';

const formatUsers = (users: User[], navigate: NavigateType): TableItem[] =>
	users.map((user) => ({
		_id: user._id,
		editNavigate: () => navigate('UserEdit', { id: user._id }),
		items: [user.email, new Date(user.createdAt).toLocaleDateString('ru')]
	}));

export const useUsers = () => {
	const { debouncedSearchTerm, control } = useSearchForm();
	const { navigate } = useTypedNavigation();

	const queryData = useQuery(
		['search-users', debouncedSearchTerm],
		() => UserService.getAllUsers(debouncedSearchTerm),
		{
			select: (data) => formatUsers(data, navigate)
		}
	);

	const { mutateAsync: deleteUserAsync } = useMutation(
		['delete-user'],
		(userID: string) => UserService.deleteUser(userID),
		{
			onSuccess: async () => {
				Toast.show({
					type: 'success',
					text1: 'Delete user',
					text2: 'delete was successful'
				});
				await queryData.refetch();
			}
		}
	);

	return useMemo(
		() => ({ ...queryData, control, deleteUserAsync }),
		[queryData, deleteUserAsync]
	);
};
