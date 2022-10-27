import { getUsersUrl } from '@app/config';

import { AuthFormData, User } from '@app/shared/types';

import { requestApi } from '@app/services/api/request.api';

export const UserService = {
	async getAllUsers(searchTerm?: string) {
		return requestApi<User[]>({
			url: getUsersUrl(''),
			method: 'GET',
			params: { searchTerm }
		});
	},

	async getUserByID(userID?: string) {
		return requestApi<User>({
			url: getUsersUrl(`${userID}`),
			method: 'GET'
		});
	},

	async updateUser(userID: string, data: AuthFormData) {
		return requestApi<string>({
			url: getUsersUrl(`${userID}`),
			method: 'PUT'
		});
	},

	async deleteUser(userID: string) {
		return requestApi<string>({
			url: getUsersUrl(`${userID}`),
			method: 'DELETE'
		});
	},

	async getProfile() {
		return requestApi<User>({
			url: getUsersUrl('/profile'),
			method: 'GET'
		});
	},

	async updateProfile(data: AuthFormData) {
		return requestApi<User>({
			url: getUsersUrl('/profile'),
			method: 'PUT',
			data
		});
	}

	// async getFavorites() {
	// 	return requestApi<Movie[]>({
	// 		url: getUsersUrl('/profile/favorite'),
	// 		method: 'GET'
	// 	});
	// },

	// async toggleFavorite() {}
};
