import { Genre, GenreEditInput } from '@app/shared/types';

import { requestApi } from '@app/services/api/request.api';

import { getGenresUrl } from '@app/config';

export const GenreService = {
	async getAllGenres(searchItem?: string) {
		return requestApi<Genre[]>({
			url: getGenresUrl(''),
			method: 'GET',
			params: searchItem ? { searchItem } : {}
		});
	},

	async getGenreBySlug(slug: string) {
		return requestApi<Genre>({
			url: getGenresUrl(`/by-slug/${slug}`),
			method: 'GET'
		});
	},

	async getGenreByID(id: string) {
		return requestApi<Genre>({
			url: getGenresUrl(`/${id}`),
			method: 'GET'
		});
	},

	async createGenre() {
		return requestApi<string>({
			url: getGenresUrl('/'),
			method: 'POST'
		});
	},

	async updateGenre(id: string, data: GenreEditInput) {
		return requestApi<string>({
			url: getGenresUrl(`/${id}`),
			method: 'PUT',
			data
		});
	},

	async deleteGenre(id: string) {
		return requestApi<string>({
			url: getGenresUrl(`/${id}`),
			method: 'DELETE'
		});
	}
};
