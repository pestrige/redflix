import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { FC } from 'react';
import { Pressable } from 'react-native';

import { CreateButtonProps } from './create-button.props';

const CreateButton: FC<CreateButtonProps> = ({ onPress }) => {
	return (
		<Pressable onPress={onPress}>
			<LinearGradient
				start={{ x: 0, y: 0.75 }}
				end={{ x: 1, y: 0.25 }}
				colors={['#dc3f41', '#a6282b']}
				className='w12 h12 rounded-2xl items-center justify-center'
			>
				<Feather name='plus' size={24} color='#ffffff' />
			</LinearGradient>
		</Pressable>
	);
};

export default CreateButton;
