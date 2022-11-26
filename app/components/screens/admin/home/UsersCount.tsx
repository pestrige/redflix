import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';
import Animated from 'react-native-reanimated';

import { Block } from '@app/components/ui';

import { useScaleOnMount } from '@app/hooks';

import { AdminService } from '@app/services';

const UsersCount: FC = () => {
	const { isLoading, data } = useQuery(['get-users-count'], () =>
		AdminService.getUsersCount()
	);
	const { styleAnimation } = useScaleOnMount();

	return (
		<Block className='items-center justify-center' isLoading={isLoading}>
			<Animated.Text
				className='text-7xl mb-1 font-medium text-white'
				style={styleAnimation}
			>
				{data}
			</Animated.Text>

			<Animated.Text
				className='text-xl opacity-70 text-white'
				style={styleAnimation}
			>
				users
			</Animated.Text>
		</Block>
	);
};

export default UsersCount;
