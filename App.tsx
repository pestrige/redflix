import Navigation from '@app/navigation/Navigation';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
	return (
		<>
			<SafeAreaProvider>
				<Navigation />
			</SafeAreaProvider>
			<StatusBar style='light' />
		</>
	);
}
