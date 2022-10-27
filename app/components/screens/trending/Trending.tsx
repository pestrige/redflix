import { ScreenLayout } from '@app/layout';
import { FC } from 'react';
import { Text, View } from 'react-native';

import { Heading } from '@app/components/ui';

const Trending: FC = () => {
	return (
		<ScreenLayout>
			<Heading title='Trending' />
		</ScreenLayout>
	);
};

export default Trending;
