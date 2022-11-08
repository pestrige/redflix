import { useMemo } from 'react';
import { useForm } from 'react-hook-form';

import { useDebounce } from '@app/hooks';

import { SearchFormData } from './search.interface';

export const useSearchForm = () => {
	const { control, watch } = useForm<SearchFormData>({
		mode: 'onChange'
	});

	const searchTerm = watch('searchTerm');
	const debouncedSearchTerm = useDebounce(searchTerm);

	return { debouncedSearchTerm, searchTerm, control };
};
