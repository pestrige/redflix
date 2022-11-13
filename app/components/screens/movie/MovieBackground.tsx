import { LinearGradient } from 'expo-linear-gradient';
import { FC } from 'react';
import { Animated, Image, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { getMediaSource } from '@app/utils';

import { HEADER_HEIGHT, inputRange } from './movie.constant';
import { MovieCommonProps } from './movie.interface';

const MovieBackground: FC<MovieCommonProps> = ({ movie, y }) => {
	const { top } = useSafeAreaInsets();
	const scale = y.interpolate({
		inputRange,
		outputRange: [2, 1, 1],
		extrapolate: 'clamp'
	});
	const translateY = y.interpolate({
		inputRange,
		outputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT * 0.01]
	});
	const opacity = y.interpolate({
		inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT * 3],
		outputRange: [1, 3, -10]
	});

	return (
		<Animated.View
			style={{
				...StyleSheet.absoluteFillObject,
				height: HEADER_HEIGHT * 1.76,
				marginTop: -top,
				// opacity, // TODO: uncomment if need to hide background
				transform: [{ scale }, { translateY }]
			}}
		>
			<Image
				source={getMediaSource(movie.poster)}
				style={StyleSheet.absoluteFill}
				resizeMode='cover'
			/>
			<LinearGradient
				style={{ ...StyleSheet.absoluteFillObject, top: -HEADER_HEIGHT * 1.6 }}
				colors={['transparent', 'rgba(0, 0, 0, 0.2)', '#090909']}
				start={[0, 0.3]}
				end={[0, 0.8]}
			/>
		</Animated.View>
	);
};

export default MovieBackground;
