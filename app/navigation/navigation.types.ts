import { ComponentType } from 'react';

export type TypeRootStackParamList = {
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
};

export interface Route {
	name: keyof TypeRootStackParamList;
	component: ComponentType;
	isAdmin?: boolean;
}
