import { Auth, Home } from '@app/components/screens';

import { adminRoutes } from './admin.routes';
import { Route } from './navigation.types';

export const userRoutes: Route[] = [
	{
		name: 'Home',
		component: Home
	},
	{
		name: 'Auth',
		component: Auth
	}
];

export const routes = [...userRoutes, ...adminRoutes];
