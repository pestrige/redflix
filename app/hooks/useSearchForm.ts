import { useForm } from 'react-hook-form';

import { useDebounce } from '@app/hooks/useDebounce';

import { SearchFormData } from '@app/shared/types';

export const useSearchForm = () => {
	const { control, watch } = useForm<SearchFormData>({
		mode: 'onChange'
	});

	const searchTerm = watch('searchTerm');
	const debouncedSearchTerm = useDebounce(searchTerm);

	return { debouncedSearchTerm, searchTerm, control };
};
