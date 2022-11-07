import {
	Favorites,
	Genre,
	Home,
	Profile,
	Search,
	Trending
} from '@app/components/screens';

import { adminRoutes } from './admin.routes';
import { Route } from './navigation.types';

export const userRoutes: Route[] = [
	{ name: 'Home', component: Home },
	{ name: 'Trending', component: Trending },
	{ name: 'Search', component: Search },
	{ name: 'Favorites', component: Favorites },
	{ name: 'Profile', component: Profile },
	{ name: 'Genre', component: Genre }
];

export const routes = [...userRoutes, ...adminRoutes];
