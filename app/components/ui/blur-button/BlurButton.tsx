import { Feather } from '@expo/vector-icons';
import cn from 'clsx';
import { BlurView } from 'expo-blur';
import { FC, PropsWithChildren } from 'react';
import { Pressable, Text, View } from 'react-native';

import { BlurButtonProps } from './blur-button.props';

const BlurButton: FC<PropsWithChildren<BlurButtonProps>> = ({
	children,
	className,
	color = '#fffff',
	icon,
	size = 21,
	...rest
}) => {
	return (
		<Pressable {...rest}>
			<BlurView
				intensity={22}
				tint='light'
				className={cn(
					className,
					'w-12 h-12 items-center justify-center rounded-2xl overflow-hidden'
				)}
			>
				{children ?? <Feather name={icon} size={size} color={color} />}
			</BlurView>
		</Pressable>
	);
};

export default BlurButton;
