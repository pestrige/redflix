import { Animated } from 'react-native';

import { Movie } from '@app/shared/types';

export interface MovieCommonProps {
	movie: Movie;
	y: Animated.Value;
}
