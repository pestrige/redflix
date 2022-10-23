import { Colors } from '@app/config';
import { TypeRootStackParamList } from '@app/navigation/navigation.types';
import { Feather } from '@expo/vector-icons';
import { FC } from 'react';
import { Pressable, Text, View } from 'react-native';

import { TypeNavigate } from '@app/shared/types';

import { MenuItem } from './bottom-menu.props';

interface BottomMenuItemProps {
	item: MenuItem;
	nav: TypeNavigate;
	currentRoute?: string;
}

const BottomMenuItem: FC<BottomMenuItemProps> = ({
	item,
	nav,
	currentRoute
}) => {
	const { iconName, path } = item;
	const isActive = currentRoute === path;
	const iconColor = isActive ? Colors.primary : Colors.gray400;

	return (
		<Pressable className='items-center w-[20%]' onPress={() => nav(path)}>
			<Feather name={iconName} size={26} color={iconColor} />
		</Pressable>
	);
};

export default BottomMenuItem;
