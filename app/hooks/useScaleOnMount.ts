import { useIsFocused } from '@react-navigation/native';
import { useEffect } from 'react';
import {
	useAnimatedStyle,
	useSharedValue,
	withSpring
} from 'react-native-reanimated';

export const useScaleOnMount = () => {
	const scale = useSharedValue(0);
	const styleAnimation = useAnimatedStyle(() => ({
		transform: [{ scale: scale.value }]
	}));
	const isFocused = useIsFocused();

	useEffect(() => {
		scale.value = withSpring(isFocused ? 1 : 0);
	}, [isFocused]);

	return { styleAnimation };
};
