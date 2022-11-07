import { FC } from 'react';

import { ScreenLayout } from '@app/layout';

import { Loader, MoviesCatalog } from '@app/components/ui';

import { useTrending } from './useTrending';

const Trending: FC = () => {
	const { isLoading, movies } = useTrending();

	if (isLoading) {
		return <Loader />;
	}

	return (
		<ScreenLayout>
			<MoviesCatalog
				title='Trending'
				movies={movies}
				description='Trending movies in excellent quality: legal, safe, without ads'
			/>
		</ScreenLayout>
	);
};

export default Trending;
