import { FC } from 'react';

import { AdminLayout } from '@app/layout';

import { Table, TableHeader } from '@app/components/ui';

import { useMoviesList } from './useMoviesList';

const headerItems = ['Title', 'Main genre', 'Rating'];

const MoviesList: FC = () => {
	const { control, data, isLoading, deleteMovieAsync, createMovieAsync } =
		useMoviesList();

	return (
		<AdminLayout title='Movies List'>
			<TableHeader control={control} onPress={createMovieAsync} />
			<Table
				isLoading={isLoading}
				tableItems={data}
				headerItems={headerItems}
				removeHandler={deleteMovieAsync}
			/>
		</AdminLayout>
	);
};

export default MoviesList;
