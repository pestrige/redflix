import { useIsFocused } from '@react-navigation/native';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { useAnimatedStyle, withSpring } from 'react-native-reanimated';

export const useAdminHeader = (
	isShown: boolean,
	onToggleShown: Dispatch<SetStateAction<boolean>>
) => {
	const isFocused = useIsFocused();

	const menuAnimatedStyles = useAnimatedStyle(
		() => ({
			transform: [
				{ translateX: withSpring(isShown ? 0 : 165, { damping: 11.7 }) }
			]
		}),
		[isShown]
	);

	useEffect(() => {
		onToggleShown(!isFocused);
	}, [isFocused]);

	return menuAnimatedStyles;
};
