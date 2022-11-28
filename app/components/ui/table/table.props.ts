import { TableItem } from '@app/shared/types';

export interface TableProps {
	tableItems?: TableItem[];
	isLoading: boolean;
	headerItems: string[];
	removeHandler: (id: string) => void;
}
