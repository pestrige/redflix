import { ScreenLayout } from '@app/layout';
import { FC } from 'react';
import { Text, View } from 'react-native';

import { Heading } from '@app/components/ui';

const Search: FC = () => {
	return (
		<ScreenLayout>
			<Heading title='Search' />
		</ScreenLayout>
	);
};

export default Search;
