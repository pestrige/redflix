import { FC } from 'react';
import { Text } from 'react-native';

import { AdminLayout } from '@app/layout';

import { Table, TableHeader } from '@app/components/ui';

import { useUsers } from '@app/hooks';

const headerItems = ['Email', 'Registration date'];

const UsersList: FC = () => {
	const { control, isLoading, data, deleteUserAsync } = useUsers();
	return (
		<AdminLayout title='Users List'>
			<TableHeader control={control} />
			<Table
				tableItems={data}
				isLoading={isLoading}
				headerItems={headerItems}
				removeHandler={deleteUserAsync}
			/>
		</AdminLayout>
	);
};

export default UsersList;
