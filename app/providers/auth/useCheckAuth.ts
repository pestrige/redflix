import { useAuth } from '@app/hooks';
import { useEffect } from 'react';

import { getNewTokens } from '@app/services/api/helpers.api';
import {
	getAccessToken,
	getRefreshToken
} from '@app/services/auth/auth.helpers';
import { AuthService } from '@app/services/auth/auth.service';

export const useCheckAuth = (routeName?: string) => {
	const { user, setUser } = useAuth();

	useEffect(() => {
		(async () => {
			const accessToken = await getAccessToken();

			if (accessToken) {
				try {
					await getNewTokens();
				} catch (e) {
					if (e === 'jwt expired') {
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
