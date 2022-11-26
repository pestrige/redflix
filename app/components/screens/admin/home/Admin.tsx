import { FC } from 'react';
import { ScrollView, Text, View } from 'react-native';

import { AdminLayout } from '@app/layout';

import PopularMovies from './PopularMovies';
import UsersCount from './UsersCount';

const Admin: FC = () => {
	return (
		<AdminLayout title='Statistic'>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View className='flex items-stretch'>
					<UsersCount />
					<PopularMovies />
				</View>
			</ScrollView>
		</AdminLayout>
	);
};

export default Admin;
