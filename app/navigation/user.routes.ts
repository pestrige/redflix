import Auth from '@app/components/screens/auth/Auth';
import Home from '@app/components/screens/home/Home';

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
