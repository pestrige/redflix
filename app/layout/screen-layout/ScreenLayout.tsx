import cn from 'clsx';
import { FC, PropsWithChildren } from 'react';
import { Platform, SafeAreaView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ScreenLayoutProps } from './screen-layout.props';

const ScreenLayout: FC<PropsWithChildren<ScreenLayoutProps>> = ({
	children,
	className,
	style,
	hasPadding = true
}) => {
	const { top } = useSafeAreaInsets();
	const paddingTop = Platform.OS === 'ios' ? top / 6 : top * 2;

	return (
		<SafeAreaView className='flex-1'>
			<View
				className={cn('flex-1', className, { 'px-6': hasPadding })}
				style={{ paddingTop, ...style }}
			>
				{children}
			</View>
		</SafeAreaView>
	);
};

export default ScreenLayout;
