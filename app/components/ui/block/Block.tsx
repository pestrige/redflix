import { FC, PropsWithChildren } from 'react';
import { View } from 'react-native';

import Loader from '@app/components/ui/Loader';

interface BlockProps {
	className?: string;
	isLoading?: boolean;
}

const Block: FC<PropsWithChildren<BlockProps>> = ({
	children,
	className,
	isLoading = false,
	...props
}) => {
	return (
		<View
			className={`text-center w-f ull border border-2 border-gray-500 rounded-2xl p-5 ${className}`}
			{...props}
		>
			{isLoading ? <Loader /> : children}
		</View>
	);
};

export default Block;
