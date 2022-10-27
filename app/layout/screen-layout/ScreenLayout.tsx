import cn from 'clsx';
import { FC, PropsWithChildren } from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import { ScreenLayoutProps } from './screen-layout.props';

const ScreenLayout: FC<PropsWithChildren<ScreenLayoutProps>> = ({
	children,
	className,
	style,
	hasPadding = true
}) => {
	return (
		<SafeAreaView className='flex-1'>
			<View
				className={cn('pt-5 flex-1', className, { 'px-6': hasPadding })}
				style={style}
			>
				{children}
			</View>
		</SafeAreaView>
	);
};

export default ScreenLayout;
