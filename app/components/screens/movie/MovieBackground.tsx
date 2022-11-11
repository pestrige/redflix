import { LinearGradient } from 'expo-linear-gradient';
import { FC } from 'react';
import { Animated, Image, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { getMediaSource } from '@app/utils';

import { MovieCommonProps } from './movie.interface';

const MovieBackground: FC<MovieCommonProps> = ({ movie }) => {
	const { top } = useSafeAreaInsets();
	const { poster } = movie;

	return (
		<Animated.View style={StyleSheet.absoluteFillObject}>
			<Image
				source={getMediaSource(poster)}
				style={StyleSheet.absoluteFill}
				resizeMode='cover'
			/>
			<LinearGradient
				style={StyleSheet.absoluteFill}
				colors={['transparent', 'rgba(0, 0, 0, 0.2)', '#090909']}
				start={[0, 0.3]}
				end={[0, 0.8]}
			/>
		</Animated.View>
	);
};

export default MovieBackground;
