import {
	Actor,
	Favorites,
	Genre,
	Home,
	Movie,
	Profile,
	Search,
	Trending
} from '@app/components/screens';

import { Route } from './navigation.types';

export const userRoutes: Route[] = [
	{ name: 'Home', component: Home },
	{ name: 'Actor', component: Actor },
	{ name: 'Favorites', component: Favorites },
	{ name: 'Genre', component: Genre },
	{ name: 'Movie', component: Movie },
	{ name: 'Profile', component: Profile },
	{ name: 'Search', component: Search },
	{ name: 'Trending', component: Trending }
];
