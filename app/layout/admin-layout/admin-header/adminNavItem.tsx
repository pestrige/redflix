import { MaterialIcons } from '@expo/vector-icons';
import { AdminNavigationItem } from 'app/layout/admin-layout/admin-header/admin-header.interface';
import cn from 'clsx';
import { FC } from 'react';
import { Pressable, Text } from 'react-native';

import { useTypedNavigation, useTypedRoute } from '@app/hooks';

const AdminNavItem: FC<{ item: AdminNavigationItem }> = ({ item }) => {
	const { title, icon, routeName } = item;
	const { navigate } = useTypedNavigation();
	const { name } = useTypedRoute();

	return (
		<Pressable
			onPress={() => navigate(routeName)}
			className='flex-row items-center mb-1'
		>
			<MaterialIcons
				name={icon}
				size={18}
				color={name === routeName ? '#D73033' : '#666'}
			/>
			<Text
				className={cn('text-xl text-[#D1D1D1] ml-2', {
					'text-[#D73033] font-medium': name === routeName
				})}
			>
				{title}
			</Text>
		</Pressable>
	);
};

export default AdminNavItem;
