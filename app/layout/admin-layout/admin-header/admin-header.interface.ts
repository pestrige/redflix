import {
	TypeRootStackAdminMenuList,
	TypeRootStackParamList
} from '@app/navigation/navigation.types';

import { TypeMaterialIconType } from '@app/shared/types';

export interface AdminHeaderProps {
	title: string;
	isBackButton?: boolean;
}

export interface AdminNavigationItem {
	icon: TypeMaterialIconType;
	title: string;
	routeName: keyof TypeRootStackAdminMenuList;
}
