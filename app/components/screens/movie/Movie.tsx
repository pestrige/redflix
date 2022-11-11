import { FC } from 'react';

import { ScreenLayout } from '@app/layout';

import { NotFoundScreen } from '@app/components/screens';
import { Loader } from '@app/components/ui';

import MovieBackground from './MovieBackground';
import MovieHeader from './MovieHeader';
import MovieInfo from './MovieInfo';
import { useMovie } from './useMovie';

const Movie: FC = () => {
	const { isLoading, movie } = useMovie();

	if (isLoading) {
		return <Loader />;
	}
	if (!movie) {
		return <NotFoundScreen title='Movie not found' />;
	}

	return (
		<ScreenLayout style={{ paddingTop: 0 }} hasPadding={false}>
			<MovieHeader movie={movie} />
			<MovieBackground movie={movie} />
			<MovieInfo movie={movie} />
		</ScreenLayout>
	);
};

export default Movie;
