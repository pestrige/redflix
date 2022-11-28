import { FC } from 'react';
import { View } from 'react-native';

import { SearchFormData } from '@app/shared/types';

import CreateButton from '../create-button/CreateButton';
import Field from '../field/Field';

import { TableHeaderProps } from './table-header.props';

const TableHeader: FC<TableHeaderProps> = ({ control, onPress }) => {
	return (
		<View className='flex-row items-center justify-between mb-3'>
			<View style={{ width: onPress ? '82%' : '100%' }}>
				<Field<SearchFormData>
					control={control}
					name='searchTerm'
					keyboardType='web-search'
					placeholder='Type something... '
				/>
			</View>

			{!!onPress && <CreateButton onPress={onPress} />}
		</View>
	);
};

export default TableHeader;
