import { FC } from 'react';
import { Text } from 'react-native';

import { AdminLayout } from '@app/layout';

const UsersList: FC = () => {
	return (
		<AdminLayout title='Users List'>
			<Text>Users List</Text>
		</AdminLayout>
	);
};

export default UsersList;
