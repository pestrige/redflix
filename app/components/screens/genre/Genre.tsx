import { FC } from 'react';

import { ScreenLayout } from '@app/layout';

import { Loader, MoviesCatalog, NotFound } from '@app/components/ui';

import { useGenre } from './useGenre';

const Genre: FC = () => {
	const { isLoading, movies, genre } = useGenre();

	if (isLoading) {
		return <Loader />;
	}

	return (
		<ScreenLayout>
			{genre?._id ? (
				<MoviesCatalog
					title={genre.name}
					description={genre.description}
					movies={movies}
					isBackButton={true}
				/>
			) : (
				<NotFound />
			)}
		</ScreenLayout>
	);
};

export default Genre;
