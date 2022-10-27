import Navigation from '@app/navigation/Navigation';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Toast } from '@app/components/ui';

import AuthProvider from '@app/providers/auth/AuthProvider';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: { refetchOnWindowFocus: false }
	}
});

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<SafeAreaProvider>
					<Navigation />
				</SafeAreaProvider>
			</AuthProvider>
			<StatusBar style='light' />
			<Toast />
		</QueryClientProvider>
	);
}
