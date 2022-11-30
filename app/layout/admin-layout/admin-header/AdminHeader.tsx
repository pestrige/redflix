import { BlurView } from 'expo-blur';
import { FC, useState } from 'react';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';

import { BlurButton, Hamburger, Heading } from '@app/components/ui';

import { useTypedNavigation } from '@app/hooks';

import { adminNavMenu } from './admin-header.data';
import { AdminHeaderProps } from './admin-header.interface';
import AdminNavItem from './adminNavItem';
import { useAdminHeader } from './useAdminHeader';

const AdminHeader: FC<AdminHeaderProps> = ({ title, isBackButton }) => {
	const { goBack } = useTypedNavigation();
	const [isShown, setIsShown] = useState(false);

	const menuAnimatedStyles = useAdminHeader(isShown, setIsShown);

	return (
		<View className='flex-row justify-between items-center z-10 mb-5'>
			<Heading title={title} />

			<View className='relative flex-row'>
				{isBackButton && (
					<BlurButton
						onPress={goBack}
						icon='chevron-left'
						size={24}
						className='mr-3'
					/>
				)}

				<Hamburger isShown={isShown} onPress={() => setIsShown(!isShown)} />

				<Animated.View style={menuAnimatedStyles}>
					<BlurView
						intensity={50}
						tint='dark'
						className='absolute right-0 top-14 w-36 overflow-hidden rounded-2xl px-3.5 py-2.5'
					>
						{adminNavMenu.map((item) => (
							<AdminNavItem item={item} key={item.routeName} />
						))}
					</BlurView>
				</Animated.View>
			</View>
		</View>
	);
};

export default AdminHeader;
