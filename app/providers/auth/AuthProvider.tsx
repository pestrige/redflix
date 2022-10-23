import * as SplashScreen from 'expo-splash-screen';
import {
	FC,
	PropsWithChildren,
	createContext,
	useEffect,
	useState
} from 'react';

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
		let mounted = true;

		(async () => {
			try {
			} catch (e) {
			} finally {
				await SplashScreen.hideAsync();
			}
		})();

		return () => {
			mounted = false;
		};
	}, []);

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
