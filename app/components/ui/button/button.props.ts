import { PressableProps } from 'react-native';

import { TypeFeatherIconType } from '@app/shared/types/icon.types';

export interface ButtonProps extends PressableProps {
	className?: string;
	icon?: TypeFeatherIconType;
}
