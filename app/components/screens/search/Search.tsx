import { FC } from 'react';
import { View } from 'react-native';

import { ScreenLayout } from '@app/layout';

import { Field, Heading, Loader, MoviesCatalog } from '@app/components/ui';

import { SearchFormData } from '@app/shared/types';

import { useSearch } from './useSearch';

const Search: FC = () => {
	const { isLoading, searchTerm, movies, control } = useSearch();

	return (
		<ScreenLayout>
			<Heading title='Search' />
			<View className='mb-3'>
				<Field<SearchFormData>
					control={control}
					name='searchTerm'
					placeholder='Type something...'
					keyboardType='web-search'
				/>
			</View>

			{!!searchTerm && (
				<View className='mb-3'>
					{isLoading ? <Loader /> : <MoviesCatalog title='' movies={movies} />}
				</View>
			)}
		</ScreenLayout>
	);
};

export default Search;
