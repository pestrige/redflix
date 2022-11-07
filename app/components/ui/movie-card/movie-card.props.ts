import { ViewStyle } from 'react-native';

import { Movie } from '@app/shared/types';

export interface MovieCardProps {
	movie: Movie;
	index: number;
	style?: ViewStyle;
}
