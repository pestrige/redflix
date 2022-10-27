import { API_URL } from '@app/config';
import { deleteTokensFromStorage, getAccessToken } from '@app/services';
import axios from 'axios';

import { errorCatch } from './error.api';
import { getNewTokens } from './helpers.api';

const api = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json'
	}
});

api.interceptors.request.use(async (config) => {
	const accessToken = await getAccessToken();

	if (config.headers && accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`;
	}

	return config;
});

api.interceptors.response.use(
	(config) => config,
	async (error) => {
		const originalRequest = error.config;
		const isNeedToGetNewTokens =
			(error.response?.status === 401 ||
				errorCatch(error) === 'jwt expired' ||
				errorCatch(error) === 'jwt must be provided') &&
			error.config &&
			!error.config._isRetry;

		if (isNeedToGetNewTokens) {
			originalRequest._isRetry = true;
			try {
				await getNewTokens();
				return api.request(originalRequest);
			} catch (error) {
				if (errorCatch(error) === 'jwt expired') {
					await deleteTokensFromStorage();
				}
			}
		}

		throw error;
	}
);

export default api;
