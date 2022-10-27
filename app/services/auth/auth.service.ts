import { getAuthUrl } from '@app/config';
import {
	deleteTokensFromStorage,
	requestApi,
	saveToStorage
} from '@app/services';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AuthResponse, EnumAsyncStorage } from '@app/shared/types';

export const AuthService = {
	async main(type: 'reg' | 'login', email: string, password: string) {
		const response = await requestApi<AuthResponse>({
			url: getAuthUrl(`/${type === 'reg' ? 'register' : 'login'}`),
			method: 'POST',
			data: { email, password }
		});

		if (response.accessToken) {
			await saveToStorage(response);
		}

		return response;
	},

	async logout() {
		await deleteTokensFromStorage();
		await AsyncStorage.removeItem(EnumAsyncStorage.USER);
	}
};
