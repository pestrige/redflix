import { useMemo } from 'react';
import { Animated } from 'react-native';

import { ITEM_SIZE } from './carousel.constants';

export const useCardAnimation = (index: number, scrollX: Animated.Value) => {
	const inputRange = useMemo(
		() => [(index - 2) * ITEM_SIZE, (index - 1) * ITEM_SIZE, index * ITEM_SIZE],
		[index]
	);

	const rotate = scrollX.interpolate({
		inputRange,
		outputRange: ['4deg', '0deg', '-4deg']
	});

	const opacity = scrollX.interpolate({
		inputRange,
		outputRange: [0.35, 1, 0.35]
	});

	const scale = scrollX.interpolate({
		inputRange,
		outputRange: [0.92, 1, 0.92]
	});

	const opacityInfoBlock = scrollX.interpolate({
		inputRange,
		outputRange: [0, 1, 0]
	});

	return { rotate, opacity, scale, opacityInfoBlock };
};
