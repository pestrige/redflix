import { API_URL, getAuthUrl } from '@app/config';
import { getRefreshToken, saveToStorage } from '@app/services';
import axios from 'axios';

import { AuthResponse } from '@app/shared/types';

export const getNewTokens = async () => {
	try {
		const refreshToken = await getRefreshToken();

		const response = await axios.post<string, { data: AuthResponse }>(
			API_URL + getAuthUrl('/login/access-token'),
			{ refreshToken },
			{
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);

		if (response.data.accessToken) {
			await saveToStorage(response.data);
		}
		return response;
	} catch (e) {}
};
