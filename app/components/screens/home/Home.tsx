import { useTypedNavigation } from '@app/hooks';
import { ScreenLayout } from '@app/layout';
import { FC } from 'react';
import { Pressable, Text, View } from 'react-native';

import { Heading } from '@app/components/ui';

const Home: FC = () => {
	const { navigate } = useTypedNavigation();
	return (
		<ScreenLayout>
			<Heading title='Home' />
			<Pressable onPress={() => navigate('Auth')}>
				<Text>Go to login</Text>
			</Pressable>
		</ScreenLayout>
	);
};

export default Home;
