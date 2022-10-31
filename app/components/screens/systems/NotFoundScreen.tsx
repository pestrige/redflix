import { FC } from 'react';

import { ScreenLayout } from '@app/layout';

import { Heading } from '@app/components/ui';

const NotFoundScreen: FC = () => {
	// TODO: beautify 404 screen

	return (
		<ScreenLayout>
			<Heading title='Screen not found' />
		</ScreenLayout>
	);
};

export default NotFoundScreen;
