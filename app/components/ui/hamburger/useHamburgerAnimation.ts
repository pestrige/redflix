import {
	useAnimatedStyle,
	useDerivedValue,
	withTiming
} from 'react-native-reanimated';

export const useHamburgerAnimation = (isShow: boolean) => {
	const rotate = useDerivedValue(() => withTiming(isShow ? 45 : 0), [isShow]);

	const secondLineStyle = useAnimatedStyle(
		() => ({ width: withTiming(isShow ? 0 : 24), marginVertical: 6.5 }),
		[isShow]
	);

	const firstLineStyle = useAnimatedStyle(
		() => ({
			transform: [
				{ rotate: `${rotate.value}deg` },
				{ translateY: withTiming(isShow ? 12 : 0) }
			]
		}),
		[isShow]
	);

	const thirdLineStyle = useAnimatedStyle(
		() => ({
			transform: [
				{ rotate: `-${rotate.value}deg` },
				{ translateY: withTiming(isShow ? -12 : 0) }
			]
		}),
		[isShow]
	);

	const bodyStyle = useAnimatedStyle(
		() => ({
			transform: [{ translateX: withTiming(isShow ? 8 : 0) }]
		}),
		[isShow]
	);

	return {
		bodyStyle,
		firstLineStyle,
		secondLineStyle,
		thirdLineStyle
	};
};
