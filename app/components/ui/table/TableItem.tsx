import cn from 'clsx';
import { FC } from 'react';
import { Text, View } from 'react-native';

import { AdminTableItem } from '@app/shared/types';

import TableActions from './TableActions';

const TableItem: FC<AdminTableItem> = ({ tableItem, removeHandler }) => {
	return (
		<View className='flex-row items-center bg-[#151515] bg-opacity-20 mt-4 px-3 rounded-lg'>
			{tableItem.items.map((value, index) => (
				<View
					className={cn('py-3 w-36 mx-2', {
						'justify-end': index === tableItem.items.length - 1
					})}
					key={value + index}
				>
					<Text className='text-white text-base' numberOfLines={1}>
						{value}
					</Text>
				</View>
			))}

			<TableActions
				editNavigate={tableItem.editNavigate}
				removeHandler={removeHandler}
			/>
		</View>
	);
};

export default TableItem;
