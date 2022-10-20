import { TypeRootStackParamList } from '@app/navigation/navigation.types';
import { NavigationProp, useNavigation } from '@react-navigation/native';

export const useTypedNavigation = () =>
	useNavigation<NavigationProp<TypeRootStackParamList>>();
