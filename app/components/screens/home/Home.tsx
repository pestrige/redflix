import { useTypedNavigation } from '@app/hooks';
import { ScreenLayout } from '@app/layout';
import { FC } from 'react';

import { useGetAllMovies } from '@app/components/screens/home/useGetAllMovies';
import { Loader } from '@app/components/ui';

import Carousel from './carousel/Carousel';

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
