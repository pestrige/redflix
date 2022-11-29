import { Actor, ActorEditInput } from '@app/shared/types/movie.interface';

import { requestApi } from '@app/services/api/request.api';

import { getActorsUrl } from '@app/config';

export const ActorService = {
	async getAllActors(searchItem?: string) {
		return requestApi<Actor[]>({
			url: getActorsUrl(''),
			method: 'GET',
			params: searchItem ? { searchItem } : {}
		});
	},

	async getActorBySlug(slug: string) {
		return requestApi<Actor>({
			url: getActorsUrl(`/by-slug/${slug}`),
			method: 'GET'
		});
	},

	async getActorByID(id: string) {
		return requestApi<Actor>({
			url: getActorsUrl(`/${id}`),
			method: 'GET'
		});
	},

	async createActor() {
		return requestApi<string>({
			url: getActorsUrl('/'),
			method: 'POST'
		});
	},

	async updateActor(id: string, data: ActorEditInput) {
		return requestApi<string>({
			url: getActorsUrl(`/${id}`),
			method: 'PUT',
			data
		});
	},

	async deleteActor(id: string) {
		return requestApi<string>({
			url: getActorsUrl(`/${id}`),
			method: 'DELETE'
		});
	}
};
