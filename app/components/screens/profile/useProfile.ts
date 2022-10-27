import { UserService } from '@app/services';
import { useMutation, useQuery } from '@tanstack/react-query';
import { SubmitHandler, UseFormSetValue } from 'react-hook-form';
import Toast from 'react-native-toast-message';

import { AuthFormData } from '@app/shared/types';

export const useProfile = (setValue: UseFormSetValue<AuthFormData>) => {
	const { isLoading } = useQuery(['profile'], () => UserService.getProfile(), {
		onSuccess({ email }) {
			setValue('email', email);
		}
	});

	const { mutateAsync } = useMutation(
		['update-profile'],
		(data: AuthFormData) => UserService.updateProfile(data),
		{
			onSuccess() {
				Toast.show({
					type: 'success',
					text1: 'Update Profile',
					text2: 'Update was successful'
				});
			}
		}
	);

	const onSubmit: SubmitHandler<AuthFormData> = async (data) => {
		await mutateAsync(data);
	};

	return { isLoading, onSubmit };
};
