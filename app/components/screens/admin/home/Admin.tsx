import { FC } from 'react';
import { Text, View } from 'react-native';

import { AdminLayout } from '@app/layout';

const Admin: FC = () => {
	return (
		<AdminLayout title='Statistic'>
			<Text>Admin</Text>
		</AdminLayout>
	);
};

export default Admin;
