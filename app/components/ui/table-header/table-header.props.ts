import { Control } from 'react-hook-form';

import { SearchFormData } from '@app/shared/types';

export interface TableHeaderProps {
	onPress?: () => void;
	control: Control<SearchFormData>;
}
