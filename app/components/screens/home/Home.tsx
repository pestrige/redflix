import { useTypedNavigation } from '@app/hooks';
import { FC } from 'react';
import { Pressable, Text, View } from 'react-native';

const Home: FC = () => {
	const { navigate } = useTypedNavigation();
	return (
		<View className='mt-20'>
			<Text>Home</Text>
			<Pressable onPress={() => navigate('Auth')}>
				<Text>Go to login</Text>
			</Pressable>
		</View>
	);
};

export default Home;
