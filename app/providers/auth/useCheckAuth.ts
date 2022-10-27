import { useAuth } from '@app/hooks';
import {
	AuthService,
	errorCatch,
	getAccessToken,
	getNewTokens,
	getRefreshToken
} from '@app/services';
import { useEffect } from 'react';

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
