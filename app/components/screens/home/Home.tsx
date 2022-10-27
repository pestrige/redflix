import { useTypedNavigation } from '@app/hooks';
import { FC } from 'react';
import { Pressable, Text, View } from 'react-native';

import { Heading } from '@app/components/ui';

const Home: FC = () => {
	const { navigate } = useTypedNavigation();
	return (
		<View className='mt-20 items-center'>
			<Heading title='Home' />
			<Pressable onPress={() => navigate('Auth')}>
				<Text>Go to login</Text>
			</Pressable>
		</View>
	);
};

export default Home;
