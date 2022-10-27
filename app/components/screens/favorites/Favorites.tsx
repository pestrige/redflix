import { ScreenLayout } from '@app/layout';
import { FC } from 'react';

import { Heading } from '@app/components/ui';

const Favorites: FC = () => {
	return (
		<ScreenLayout>
			<Heading title='Favorites' />
		</ScreenLayout>
	);
};

export default Favorites;
