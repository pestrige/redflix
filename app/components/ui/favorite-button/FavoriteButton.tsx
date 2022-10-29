import { MaterialCommunityIcons } from '@expo/vector-icons';
import cn from 'clsx';
import { FC } from 'react';
import { StyleSheet } from 'react-native';
import Animated, { withSpring } from 'react-native-reanimated';

import BlurButton from '@app/components/ui/blur-button/BlurButton';

import { FavoriteButtonProps } from './favorite-button.props';
import { useFavorite } from './useFavorite';
import { useFavoriteAnimation } from './useFavoriteAnimation';

const FavoriteButton: FC<FavoriteButtonProps> = ({ isSmall, movieID }) => {
	const { isSmashed, toggleFavorite } = useFavorite(movieID);
	const { liked, outlineStyle, fillStyle } = useFavoriteAnimation(isSmashed);

	const handlePress = () => {
		liked.value = withSpring(liked.value === 1 ? 0 : 1);
		toggleFavorite();
	};

	return (
		<BlurButton
			className={cn({ isSmall: 'w-8 h-8 rounded-lg' })}
			onPress={handlePress}
		>
			<Animated.View
				style={[StyleSheet.absoluteFill, outlineStyle]}
				className='items-center justify-center'
			>
				<MaterialCommunityIcons
					name='heart-outline'
					size={isSmall ? 19 : 22}
					color='white'
				/>
			</Animated.View>

			<Animated.View style={fillStyle}>
				<MaterialCommunityIcons
					name='heart'
					size={isSmall ? 19 : 22}
					color='#DC3F41'
				/>
			</Animated.View>
		</BlurButton>
	);
};

export default FavoriteButton;
