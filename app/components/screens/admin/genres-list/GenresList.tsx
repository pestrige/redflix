import { FC } from 'react';
import { Text, View } from 'react-native';

import { AdminLayout } from '@app/layout';

import { Table, TableHeader } from '@app/components/ui';

import { useGenresList } from './useGenresList';

const headerItems = ['Name', 'Slug'];

const GenresList: FC = () => {
	const { control, isLoading, data, deleteGenreAsync, createGenreAsync } =
		useGenresList();

	return (
		<AdminLayout title='Genres List'>
			<TableHeader control={control} onPress={createGenreAsync} />
			<Table
				tableItems={data}
				isLoading={isLoading}
				headerItems={headerItems}
				removeHandler={deleteGenreAsync}
			/>
		</AdminLayout>
	);
};

export default GenresList;
