import { ComponentType } from 'react';

export type TypeRootStackParamList = {
	Actor: { slug: string };
	Auth: undefined;
	Favorites: undefined;
	Genre: { slug: string };
	Home: undefined;
	Movie: { slug: string };
	NotFound: undefined;
	Profile: undefined;
	Search: undefined;
	Trending: undefined;
} & TypeRootStackAdminList;

type TypeRootStackAdminList = {
	Admin: undefined;
	ActorEdit: { id: string };
	ActorsList: undefined;
	GenreEdit: { id: string };
	GenresList: undefined;
	MovieEdit: { id: string };
	MoviesList: undefined;
	UserEdit: { id: string };
	UsersList: undefined;
};

export interface Route {
	name: keyof TypeRootStackParamList;
	component: ComponentType;
	isAdmin?: boolean;
}
