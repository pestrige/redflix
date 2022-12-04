import { FC, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import { DropdownProps } from './dropdown.interface';

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#232323'
	},
	base: {
		backgroundColor: '#232323',
		paddingHorizontal: 16,
		marginVertical: 6
	},
	errorBorder: {
		borderColor: 'red'
	},
	defaultBorder: {
		borderColor: 'transparent'
	},
	text: {
		fontSize: 16
	},
	placeholder: {
		color: '#5A595D'
	}
});

DropDownPicker.setTheme('DARK');
DropDownPicker.setListMode('SCROLLVIEW');

const Dropdown: FC<DropdownProps> = ({
	options = [],
	field,
	isMulti = true,
	isLoading,
	error,
	style
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [value, setValue] = useState<string[] | null>(null);
	const [items, setItems] = useState(options);

	const getValue = (): string[] | null => {
		if (!field.value) {
			return null;
		}

		return isMulti
			? options.reduce((result, option): string[] => {
					return field.value.indexOf(option.value) >= 0
						? [...result, option.value]
						: result;
			  }, [] as string[])
			: options.find((option) => option.value === field.value)?.value;
	};

	const handleChangeValue = (value: any) => {
		if (value) {
			field.onChange(value);
		}
	};

	useEffect(() => {
		if (field.value?.length > 0 && (!value || value?.length === 0)) {
			setValue(getValue());
		}
	}, [field.value]);

	return (
		<View className='z-10' style={style}>
			<DropDownPicker
				open={isOpen}
				setOpen={setIsOpen}
				items={items}
				setItems={setItems}
				value={value}
				setValue={setValue}
				onChangeValue={handleChangeValue}
				multiple={isMulti}
				loading={isLoading}
				mode='BADGE'
				activityIndicatorColor='#bf3335'
				style={[styles.base, error ? styles.errorBorder : styles.defaultBorder]}
				textStyle={styles.text}
				placeholderStyle={styles.placeholder}
				dropDownContainerStyle={styles.container}
				showBadgeDot={false}
			/>

			{!!error && <Text className='text-red'>{error.message}</Text>}
		</View>
	);
};

export default Dropdown;
