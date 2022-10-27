import { useAuth } from '@app/hooks';
import { AuthService } from '@app/services';
import { useEffect } from 'react';

import { errorCatch, getNewTokens } from '@app/services/api';
import { getAccessToken, getRefreshToken } from '@app/services/auth';

export const useCheckAuth = (routeName?: string) => {
	const { user, setUser } = useAuth();

	useEffect(() => {
		(async () => {
			const accessToken = await getAccessToken();

			if (accessToken) {
				try {
					await getNewTokens();
				} catch (e) {
					if (errorCatch(e) === 'jwt expired') {
						await AuthService.logout();
						setUser(null);
					}
				}
			}
		})();
	}, []);

	useEffect(() => {
		(async () => {
			const refreshToken = await getRefreshToken();

			if (!refreshToken && user) {
				await AuthService.logout();
				setUser(null);
			}
		})();
	}, [routeName]);
};
