import { FC } from 'react';

import { ScreenLayout } from '@app/layout';

import { Loader } from '@app/components/ui';

import { useTypedNavigation } from '@app/hooks';

import Carousel from './carousel/Carousel';
import { useGetAllMovies } from './useGetAllMovies';

const Home: FC = () => {
	const { navigate } = useTypedNavigation();
	const { isLoading, movies } = useGetAllMovies();

	return (
		<ScreenLayout hasPadding={false}>
			{isLoading ? (
				<Loader />
			) : (
				!!movies?.length && <Carousel movies={movies} />
			)}
		</ScreenLayout>
	);
};

export default Home;
