import { FC } from 'react';

import { ScreenLayout } from '@app/layout';

import { Heading } from '@app/components/ui';

const Search: FC = () => {
	return (
		<ScreenLayout>
			<Heading title='Search' />
		</ScreenLayout>
	);
};

export default Search;
