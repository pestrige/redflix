import { PressableProps } from 'react-native';

import { TypeFeatherIconType } from '@app/shared/types';

export interface BlurButtonProps extends PressableProps {
	className?: string;
	icon?: TypeFeatherIconType;
	size?: number;
	color?: string;
}
