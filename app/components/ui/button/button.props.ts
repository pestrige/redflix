import { PressableProps } from 'react-native';

import { TypeFeatherIconType } from '@app/shared/types';

export interface ButtonProps extends PressableProps {
	className?: string;
	icon?: TypeFeatherIconType;
}
