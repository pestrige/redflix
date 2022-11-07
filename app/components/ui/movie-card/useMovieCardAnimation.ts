import { useEffect } from 'react';
import { ViewStyle } from 'react-native';
import {
	Easing,
	useAnimatedStyle,
	useSharedValue,
	withDelay,
	withTiming
} from 'react-native-reanimated';

export const useMovieCardAnimation = (index: number, style?: ViewStyle) => {
	const scale = useSharedValue(0.4);
	const opacity = useSharedValue(0);

	const animatedStyle = useAnimatedStyle(() => ({
		transform: [{ scale: scale.value }],
		opacity: opacity.value,
		...style
	}));

	useEffect(() => {
		scale.value = withDelay(
			index * 130,
			withTiming(1, { duration: 300, easing: Easing.bezier(0.5, 0.3, 0.5, 1) })
		);

		opacity.value = withDelay(
			index * 130,
			withTiming(10, { duration: 300, easing: Easing.bezier(0.5, 0.3, 0.5, 1) })
		);

		return () => {
			scale.value = withTiming(0.4);
			opacity.value = withTiming(0);
		};
	}, []);

	return { animatedStyle };
};
