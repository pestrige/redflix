export interface TableItem {
	_id: string;
	editNavigate: () => void;
	items: string[];
}

export interface AdminTableItem {
	tableItem: TableItem;
	removeHandler: () => void;
}
