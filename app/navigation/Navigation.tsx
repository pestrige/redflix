import { useAuth, useTypedNavigation, useTypedRoute } from '@app/hooks';
import { BottomMenu } from '@app/layout';
import {
	NavigationContainer,
	useNavigationContainerRef
} from '@react-navigation/native';
import { FC, useEffect, useState } from 'react';

import PrivateNavigator from './PrivateNavigator';

const Navigation: FC = () => {
	const { user } = useAuth();
	const [currentRoute, setCurrentRoute] = useState<string | undefined>(
		undefined
	);
	const navigationRef = useNavigationContainerRef();
	// const { navigate } = useTypedNavigation();
	// const route = useTypedRoute();
	console.log('currentRoute', currentRoute);

	useEffect(() => {
		setCurrentRoute(navigationRef.getCurrentRoute()?.name);
		const listener = navigationRef.addListener('state', () =>
			setCurrentRoute(navigationRef.getCurrentRoute()?.name)
		);

		return () => {
			navigationRef.removeListener('state', listener);
		};
	}, []);

	return (
		<>
			<NavigationContainer ref={navigationRef}>
				<PrivateNavigator />
			</NavigationContainer>

			{!!user && currentRoute && (
				<BottomMenu nav={navigationRef.navigate} currentRoute={currentRoute} />
			)}
		</>

		// TODO: add bottom menu
	);
};

export default Navigation;
