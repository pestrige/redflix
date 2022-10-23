import {
	Auth,
	Favorites,
	Home,
	Profile,
	Search,
	Trending
} from '@app/components/screens';

import { adminRoutes } from './admin.routes';
import { Route } from './navigation.types';

export const userRoutes: Route[] = [
	{ name: 'Home', component: Home },
	{ name: 'Favorites', component: Favorites },
	{ name: 'Profile', component: Profile },
	{ name: 'Search', component: Search },
	{ name: 'Trending', component: Trending }
];

export const routes = [...userRoutes, ...adminRoutes];
