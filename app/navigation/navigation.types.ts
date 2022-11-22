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
	ActorEdit: { id: string };
	GenreEdit: { id: string };
	MovieEdit: { id: string };
	UserEdit: { id: string };
} & TypeRootStackAdminMenuList;

export type TypeRootStackAdminMenuList = {
	Admin: undefined;
	ActorsList: undefined;
	GenresList: undefined;
	MoviesList: undefined;
	UsersList: undefined;
};

export interface Route {
	name: keyof TypeRootStackParamList;
	component: ComponentType;
	isAdmin?: boolean;
}
