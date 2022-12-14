interface MovieParameters {
	year: number;
	duration: number;
	country: string;
}

export interface Actor {
	_id: string;
	photo: string;
	name: string;
	countMovies: number;
	slug: string;
}

export interface ActorEditInput extends Omit<Actor, '_id'> {}

export interface Genre {
	_id: string;
	name: string;
	slug: string;
	description: string;
}

export interface GenreEditInput extends Omit<Genre, '_id'> {
	icon?: string;
}

export interface Movie {
	_id: string;
	poster: string;
	title: string;
	parameters: MovieParameters;
	genres: Genre[];
	actors: Actor[];
	countOpened: number;
	videoUrl: string;
	rating: number;
	slug: string;
}

export interface MovieEditInput extends Omit<Movie, '_id'> {}
