import { FC } from 'react';
import { ScrollView, Text, View } from 'react-native';

import Loader from '@app/components/ui/loader/Loader';

import Header from './Header';
import TableItem from './TableItem';
import { TableProps } from './table.props';

const Table: FC<TableProps> = ({
	isLoading,
	tableItems = [],
	removeHandler,
	headerItems
}) => {
	return (
		<ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
			<View className='pb-6'>
				<Header headerItems={headerItems} />

				{isLoading && <Loader />}

				{!isLoading && tableItems?.length > 0 && (
					<ScrollView showsVerticalScrollIndicator={false}>
						{tableItems.map((tableItem) => (
							<TableItem
								key={tableItem._id}
								tableItem={tableItem}
								removeHandler={() => removeHandler(tableItem._id)}
							/>
						))}
					</ScrollView>
				)}

				{!isLoading && tableItems?.length === 0 && (
					<Text className='px-4 py-4 text-white text-lg'>Items not found</Text>
				)}
			</View>
		</ScrollView>
	);
};

export default Table;
