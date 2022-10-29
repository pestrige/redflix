import { getMoviesUrl } from '@app/config';

import { AuthFormData, Movie, MovieEditInput } from '@app/shared/types';

import { requestApi } from '@app/services/api/request.api';

export const MovieService = {
	async getAllMovies(searchTerm?: string) {
		return requestApi<Movie[]>({
			url: getMoviesUrl(''),
			method: 'GET',
			params: { searchTerm }
		});
	},

	async getMovieByID(id: string) {
		return requestApi<MovieEditInput>({
			url: getMoviesUrl(`/by-id /${id}`),
			method: 'GET'
		});
	},

	async getMovieBySlug(slug: string) {
		return requestApi<Movie>({
			url: getMoviesUrl(`/by-slug/${slug}`),
			method: 'GET'
		});
	},

	async getMovieByActor(actorID: string) {
		return requestApi<Movie[]>({
			url: getMoviesUrl(`/by-actor/${actorID}`),
			method: 'GET'
		});
	},

	async getMovieByGenres(genresIds: string) {
		return requestApi<Movie[]>({
			url: getMoviesUrl('/by-genres/'),
			method: 'POST',
			data: { genresIds }
		});
	},

	async getMostPopularMovies() {
		return requestApi<Movie[]>({
			url: getMoviesUrl('/most-popular'),
			method: 'GET'
		});
	},

	async createMovie() {
		return requestApi<string>({
			url: getMoviesUrl(''),
			method: 'POST'
		});
	},

	async updateMovie(id: string, data: MovieEditInput) {
		return requestApi<string>({
			url: getMoviesUrl(`/${id}`),
			method: 'PUT',
			data
		});
	},

	async deleteMovie(id: string) {
		return requestApi<string>({
			url: getMoviesUrl(`/${id}`),
			method: 'DELETE'
		});
	},

	async updateViewsCount(slug: string) {
		return requestApi<string>({
			url: getMoviesUrl('update-count-opened'),
			method: 'PUT',
			data: { slug }
		});
	}
};
