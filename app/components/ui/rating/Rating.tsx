import { getColor } from '@app/config';
import { AntDesign } from '@expo/vector-icons';
import cn from 'clsx';
import { FC } from 'react';
import { Text, View } from 'react-native';

import { RatingProps } from './rating.props';

const Rating: FC<RatingProps> = ({ size = 20, rating }) => {
	return (
		<View className='flex-row items-center'>
			<AntDesign name='star' size={size} color={getColor('accent')} />
			<Text
				className={cn(
					'text-white ml-2 font-bold',
					size === 20 ? 'text-lg' : 'text-base'
				)}
			>
				{rating.toFixed(1)}
			</Text>
		</View>
	);
};

export default Rating;
