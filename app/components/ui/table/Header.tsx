import { FC } from 'react';
import { Text, View } from 'react-native';

const titleStyles = 'opacity-90 text-white font-semibold text-base';

const Header: FC<{ headerItems: string[] }> = ({ headerItems }) => {
	return (
		<View className='flex-row items-center px-3 rounded-lg bg-primary mt-2'>
			{headerItems.map((title) => (
				<View className='py-2.5 w-36 mx-2' key={title}>
					<Text className={titleStyles}>{title}</Text>
				</View>
			))}

			<View className='py-2.5 w-16 ml-2'>
				<Text className={titleStyles}>Actions</Text>
			</View>
		</View>
	);
};

export default Header;
