import { ComponentType } from 'react';

export type TypeRootStackParamList = {
	Auth: undefined;
	Favorites: undefined;
	Home: undefined;
	NotFound: undefined;
	Profile: undefined;
	Search: undefined;
	Trending: undefined;
	Movie: { slug: string };
	Genre: { slug: string };
} & TypeRootStackAdminList;

type TypeRootStackAdminList = {
	Admin: undefined;
};

export interface Route {
	name: keyof TypeRootStackParamList;
	component: ComponentType;
	isAdmin?: boolean;
}
