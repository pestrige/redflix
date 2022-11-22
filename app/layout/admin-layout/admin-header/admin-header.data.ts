import { AdminNavigationItem } from 'app/layout/admin-layout/admin-header/admin-header.interface';

export const adminNavMenu: AdminNavigationItem[] = [
	{
		icon: 'insert-chart-outlined',
		title: 'Statistics',
		routeName: 'Admin'
	},
	{
		icon: 'recent-actors',
		title: 'Actors',
		routeName: 'ActorsList'
	},
	{
		icon: 'category',
		title: 'Genres',
		routeName: 'GenresList'
	},
	{
		icon: 'movie-filter',
		title: 'Movies',
		routeName: 'MoviesList'
	},
	{
		icon: 'group',
		title: 'Users',
		routeName: 'UsersList'
	}
];
