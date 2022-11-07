import { Feather } from '@expo/vector-icons';
import cn from 'clsx';
import { BlurView } from 'expo-blur';
import { FC, PropsWithChildren } from 'react';
import { Pressable } from 'react-native';

import { BlurButtonProps } from './blur-button.props';

const BlurButton: FC<PropsWithChildren<BlurButtonProps>> = ({
	children,
	color = '#fffff',
	icon,
	size = 21,
	style,
	isSmall = false,
	...rest
}) => {
	return (
		<Pressable {...rest}>
			<BlurView
				intensity={22}
				tint='light'
				className={cn(
					' items-center justify-center overflow-hidden',
					isSmall ? 'w-8 h-8 rounded-lg' : 'w-12 h-12 rounded-2xl'
				)}
				style={style}
			>
				{children ?? <Feather name={icon} size={size} color={color} />}
			</BlurView>
		</Pressable>
	);
};

export default BlurButton;
