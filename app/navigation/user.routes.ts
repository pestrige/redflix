import {
	Favorites,
	Genre,
	Home,
	Movie,
	Profile,
	Search,
	Trending
} from '@app/components/screens';

import { adminRoutes } from './admin.routes';
import { Route } from './navigation.types';

export const userRoutes: Route[] = [
	{ name: 'Favorites', component: Favorites },
	{ name: 'Genre', component: Genre },
	{ name: 'Home', component: Home },
	{ name: 'Movie', component: Movie },
	{ name: 'Profile', component: Profile },
	{ name: 'Search', component: Search },
	{ name: 'Trending', component: Trending }
];

export const routes = [...userRoutes, ...adminRoutes];
