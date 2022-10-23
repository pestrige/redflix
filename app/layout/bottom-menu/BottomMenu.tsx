import { Colors } from '@app/config';
import BottomMenuItem from '@app/layout/bottom-menu/BottomMenuItem';
import { FC } from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { TypeNavigate } from '@app/shared/types';

import { menuItems } from './config';

interface BottomMenuProps {
	nav: TypeNavigate;
	currentRoute?: string;
}

const BottomMenu: FC<BottomMenuProps> = (props) => {
	const { bottom } = useSafeAreaInsets();

	return (
		<View
			className={`pt-5 px-2 flex-row justify-between items-center w-full border-t border-t-solid border-t-[#929292] bg-[#090909]`}
			style={{ paddingBottom: bottom + 5 }}
		>
			{menuItems.map((item) => (
				<BottomMenuItem key={item.path} item={item} {...props} />
			))}
		</View>
	);
};

export default BottomMenu;
