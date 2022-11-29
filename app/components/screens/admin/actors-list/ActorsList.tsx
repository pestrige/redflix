import { FC } from 'react';

import { AdminLayout } from '@app/layout';

import { Table, TableHeader } from '@app/components/ui';

import { useActorsList } from './useActorsList';

const headerItems = ['Name', 'Movies count'];

const ActorsList: FC = () => {
	const { control, isLoading, data, deleteActorAsync, createActorAsync } =
		useActorsList();

	return (
		<AdminLayout title='Actors List'>
			<TableHeader control={control} onPress={createActorAsync} />
			<Table
				isLoading={isLoading}
				headerItems={headerItems}
				removeHandler={deleteActorAsync}
				tableItems={data}
			/>
		</AdminLayout>
	);
};

export default ActorsList;
