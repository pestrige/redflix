import { PressableProps, ViewStyle } from 'react-native';

import { TypeFeatherIconType } from '@app/shared/types';

export interface BlurButtonProps extends PressableProps {
	icon?: TypeFeatherIconType;
	size?: number;
	color?: string;
	style?: ViewStyle;
	isSmall?: boolean;
}
