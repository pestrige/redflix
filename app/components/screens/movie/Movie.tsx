import { FC, useRef } from 'react';
import { Animated } from 'react-native';

import { ScreenLayout } from '@app/layout';

import NotFoundScreen from '@app/components/screens/systems/NotFoundScreen';
import { Loader } from '@app/components/ui';

import MovieBackground from './MovieBackground';
import MovieContent from './MovieContent';
import MovieHeader from './MovieHeader';
import { useMovie } from './useMovie';
import { useUpdateCountOpened } from './useUpdateCountOpened';

const Movie: FC = () => {
	const y = useRef(new Animated.Value(0)).current;
	const { isLoading, movie } = useMovie();

	useUpdateCountOpened();

	if (isLoading) {
		return <Loader />;
	}
	if (!movie) {
		return <NotFoundScreen title='Movie not found' />;
	}

	return (
		<ScreenLayout style={{ paddingTop: 0 }} hasPadding={false}>
			<MovieHeader movie={movie} y={y} />
			<MovieBackground movie={movie} y={y} />
			<MovieContent movie={movie} y={y} />
		</ScreenLayout>
	);
};

export default Movie;
