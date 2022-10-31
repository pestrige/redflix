import { useMutation } from '@tanstack/react-query';
import { useMemo } from 'react';
import { UseFormReset } from 'react-hook-form';

import { useAuth } from '@app/hooks';

import { AuthFormData } from '@app/shared/types';

import { AuthService } from '@app/services';

export const useAuthMutations = (reset: UseFormReset<AuthFormData>) => {
	const { setUser } = useAuth();

	const { mutate: loginSync, isLoading: isLoginLoading } = useMutation(
		['login'],
		({ email, password }: AuthFormData) =>
			AuthService.main('login', email, password),
		{
			onSuccess(data) {
				setTimeout(() => {
					reset();
					setUser(data.user);
				});
			}
		}
	);

	const { mutate: registerSync, isLoading: isRegisterLoading } = useMutation(
		['register'],
		({ email, password }: AuthFormData) =>
			AuthService.main('reg', email, password),
		{
			onSuccess(data) {
				setTimeout(() => {
					reset();
					setUser(data.user);
				});
			}
		}
	);

	return useMemo(
		() => ({
			loginSync,
			registerSync,
			isLoading: isLoginLoading || isRegisterLoading
		}),
		[isLoginLoading, isRegisterLoading]
	);
};
