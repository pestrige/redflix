import { API_URL, getAuthUrl } from '@app/config';
import axios from 'axios';
import { getItemAsync } from 'expo-secure-store';

import { AuthResponse, EnumSecureStore } from '@app/shared/types';

import { saveToStorage } from '@app/services/auth/auth.helpers';

export const getNewTokens = async () => {
	try {
		const refreshToken = await getItemAsync(EnumSecureStore.REFRESH_TOKEN);

		const response = await axios.post<string, { data: AuthResponse }>(
			API_URL + getAuthUrl('/login/access-token'),
			{ refreshToken },
			{
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);

		if (response.data.accessToken) await saveToStorage(response.data);

		return response;
	} catch (e) {}
};
