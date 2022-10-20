import { NavigationContainer } from '@react-navigation/native';
import {
	NativeStackNavigationOptions,
	createNativeStackNavigator
} from '@react-navigation/native-stack';
import { FC } from 'react';

import { TypeRootStackParamList } from './navigation.types';
import { userRoutes } from './user.routes';

const Stack = createNativeStackNavigator<TypeRootStackParamList>();
const navigationOptions: NativeStackNavigationOptions = {
	headerShown: false,
	contentStyle: {
		backgroundColor: '#090909'
	}
};

const Navigation: FC = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={navigationOptions}>
				{userRoutes.map((route) => (
					<Stack.Screen key={route.name} {...route} />
				))}
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Navigation;
