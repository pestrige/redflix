import { FC } from 'react';

import { ScreenLayout } from '@app/layout';

import { Heading } from '@app/components/ui';

interface NotFoundScreenProps {
	title?: string;
}

const NotFoundScreen: FC<NotFoundScreenProps> = ({
	title = 'Screen not found'
}) => {
	// TODO: beautify 404 screen

	return (
		<ScreenLayout>
			<Heading title={title} />
		</ScreenLayout>
	);
};

export default NotFoundScreen;
