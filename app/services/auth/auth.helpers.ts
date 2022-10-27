import AsyncStorage from '@react-native-async-storage/async-storage';
import { deleteItemAsync, getItemAsync, setItemAsync } from 'expo-secure-store';

import {
	AuthResponse,
	EnumAsyncStorage,
	EnumSecureStore,
	Tokens
} from '@app/shared/types';

export const getAccessToken = async () => {
	const accessToken = await getItemAsync(EnumSecureStore.ACCESS_TOKEN);

	return accessToken || null;
};

export const getRefreshToken = async () => {
	const refreshToken = await getItemAsync(EnumSecureStore.REFRESH_TOKEN);

	return refreshToken || null;
};

const saveTokensToStorage = async (data: Tokens) => {
	await setItemAsync(EnumSecureStore.ACCESS_TOKEN, data.accessToken);
	await setItemAsync(EnumSecureStore.REFRESH_TOKEN, data.refreshToken);
};

export const deleteTokensFromStorage = async () => {
	await deleteItemAsync(EnumSecureStore.ACCESS_TOKEN);
	await deleteItemAsync(EnumSecureStore.REFRESH_TOKEN);
};

export const getUserFromStorage = async () => {
	try {
		const user = (await AsyncStorage.getItem(EnumAsyncStorage.USER)) || '{}';

		return JSON.parse(user);
	} catch (e) {
		return null;
	}
};

export const saveToStorage = async (data: AuthResponse) => {
	await saveTokensToStorage(data);

	try {
		await AsyncStorage.setItem(
			EnumAsyncStorage.USER,
			JSON.stringify(data.user)
		);
	} catch (e) {}
};
