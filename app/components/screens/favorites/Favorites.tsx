import { FC } from 'react';

import { ScreenLayout } from '@app/layout';

import { Loader, MoviesCatalog } from '@app/components/ui';

import { useFavorites } from './useFavorites';

const Favorites: FC = () => {
	const { favoriteMovies, isLoading } = useFavorites();

	if (isLoading) {
		return <Loader />;
	}

	return (
		<ScreenLayout>
			<MoviesCatalog title='Favorites' movies={favoriteMovies} />
		</ScreenLayout>
	);
};

export default Favorites;
