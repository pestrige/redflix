import { TypeRootStackParamList } from '@app/navigation/navigation.types';

import { TypeFeatherIconType } from '@app/shared/types';

export interface MenuItem {
	iconName: TypeFeatherIconType;
	path: keyof TypeRootStackParamList;
}
export interface BottomMenuProps {}
