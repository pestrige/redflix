import { Movie } from '@app/shared/types';

export interface MovieCardProps {
	movie: Movie;
	index: number;
	className?: string;
}
