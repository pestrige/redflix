import { FC } from 'react';
import { Text, View } from 'react-native';

import { Heading } from '@app/components/ui';

const Favorites: FC = () => {
	return (
		<View className='mt-20 items-center'>
			<Heading title='Favorites' />
		</View>
	);
};

export default Favorites;
