import {
	NativeStackNavigationOptions,
	createNativeStackNavigator
} from '@react-navigation/native-stack';
import { FC } from 'react';

import { Auth } from '@app/components/screens';

import { useAuth } from '@app/hooks';

import { Colors } from '@app/config';

import { adminRoutes } from './admin.routes';
import { TypeRootStackParamList } from './navigation.types';
import { userRoutes } from './user.routes';

const Stack = createNativeStackNavigator<TypeRootStackParamList>();
const navigationOptions: NativeStackNavigationOptions = {
	headerShown: false,
	contentStyle: {
		backgroundColor: Colors.dark
	}
};

const PrivateNavigator: FC = () => {
	const { user } = useAuth();
	const routes = user?.isAdmin ? [...userRoutes, ...adminRoutes] : userRoutes;

	return (
		<Stack.Navigator screenOptions={navigationOptions}>
			{!!user &&
				routes.map((route) => <Stack.Screen key={route.name} {...route} />)}

			{!user && <Stack.Screen key='Auth' name='Auth' component={Auth} />}
		</Stack.Navigator>
	);
};

export default PrivateNavigator;
