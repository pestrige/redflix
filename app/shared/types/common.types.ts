import { TypeRootStackParamList } from '@app/navigation/navigation.types';

export type TypeNavigate = (screenName: keyof TypeRootStackParamList) => void;
