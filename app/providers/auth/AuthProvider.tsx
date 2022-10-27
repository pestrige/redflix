import * as SplashScreen from 'expo-splash-screen';
import {
	FC,
	PropsWithChildren,
	createContext,
	useEffect,
	useState
} from 'react';

import { getAccessToken, getUserFromStorage } from '@app/services/auth';

import { IAuthContext, UserState } from './auth-provider.interface';

const initContext = {
	user: null,
	setUser: () => {}
};

export const AuthContext = createContext<IAuthContext>(initContext);

(async () => {
	await SplashScreen.preventAutoHideAsync();
})();

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const [user, setUser] = useState<UserState>(null);

	useEffect(() => {
		let isMounted = true;

		(async () => {
			try {
				const accessToken = await getAccessToken();
				if (!accessToken) {
					return;
				}
				const user = await getUserFromStorage();
				if (isMounted) {
					setUser(user);
				}
			} catch {
			} finally {
				await SplashScreen.hideAsync();
			}
		})();

		return () => {
			isMounted = false;
		};
	}, []);

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
