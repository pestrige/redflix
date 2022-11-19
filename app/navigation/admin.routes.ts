import {
	ActorEdit,
	ActorsList,
	AdminHome,
	GenreEdit,
	GenresList,
	MovieEdit,
	MoviesList
} from '@app/components/screens';

import { Route } from './navigation.types';

export const adminRoutes: Route[] = [
	{ name: 'Admin', component: AdminHome, isAdmin: true },
	{ name: 'Actor', component: ActorEdit, isAdmin: true },
	{ name: 'ActorsList', component: ActorsList, isAdmin: true },
	{ name: 'GenreEdit', component: GenreEdit, isAdmin: true },
	{ name: 'GenresList', component: GenresList, isAdmin: true },
	{ name: 'MovieEdit', component: MovieEdit, isAdmin: true },
	{ name: 'MoviesList', component: MoviesList, isAdmin: true }
];
