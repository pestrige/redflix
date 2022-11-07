import { FC } from 'react';
import { View } from 'react-native';

import Heading from '@app/components/ui/heading/Heading';

const NotFound: FC = () => {
	return (
		<View>
			<Heading title='404 Page not Found' />
		</View>
	);
};

export default NotFound;
