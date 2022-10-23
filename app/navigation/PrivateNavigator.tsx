import { Colors } from '@app/config';
import { useAuth } from '@app/hooks';
import {
	NativeStackNavigationOptions,
	createNativeStackNavigator
} from '@react-navigation/native-stack';
import { FC } from 'react';

import { Auth, NotFoundScreen } from '@app/components/screens';

import { TypeRootStackParamList } from './navigation.types';
import { routes } from './user.routes';

const Stack = createNativeStackNavigator<TypeRootStackParamList>();
const navigationOptions: NativeStackNavigationOptions = {
	headerShown: false,
	contentStyle: {
		backgroundColor: Colors.dark
	}
};

const PrivateNavigator: FC = () => {
	const { user } = useAuth();
	console.log('user', user);
	return (
		<Stack.Navigator screenOptions={navigationOptions}>
			{user ? (
				routes.map((route) =>
					user.isAdmin || !route.isAdmin ? (
						<Stack.Screen key={route.name} {...route} />
					) : (
						<Stack.Screen
							key='NotFound'
							name='NotFound'
							component={NotFoundScreen}
						/>
					)
				)
			) : (
				<Stack.Screen key='Auth' name='Auth' component={Auth} />
			)}
		</Stack.Navigator>
	);
};

export default PrivateNavigator;
