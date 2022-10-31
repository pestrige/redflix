import { Movie } from '@app/shared/types';

export interface MoviesCatalogProps {
	title: string;
	description?: string;
	movies?: Movie[];
	isBackButton?: boolean;
}
