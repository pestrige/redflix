import { AdminHome } from '@app/components/screens';

import { Route } from './navigation.types';

export const adminRoutes: Route[] = [
	{ name: 'Admin', component: AdminHome, isAdmin: true }
];
