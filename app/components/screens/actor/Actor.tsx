import { FC } from 'react';

import { ScreenLayout } from '@app/layout';

import { Loader, MoviesCatalog, NotFound } from '@app/components/ui';

import { useActor } from './useActor';

const Actor: FC = () => {
	const { isLoading, movies, actor } = useActor();

	if (isLoading) {
		return <Loader />;
	}

	return (
		<ScreenLayout>
			{!actor?._id && <NotFound />}

			{actor?._id && <MoviesCatalog title={actor.name} movies={movies} />}
		</ScreenLayout>
	);
};

export default Actor;
