import { TypeRootStackParamList } from '@app/navigation/navigation.types';

export type NavigateType = (
	route: keyof TypeRootStackParamList,
	params: Record<string, unknown>
) => void;

export type TypeNavigate = (screenName: keyof TypeRootStackParamList) => void;

export interface SearchFormData {
	searchTerm: string;
}
