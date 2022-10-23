import cn from 'clsx';
import { Controller } from 'react-hook-form';
import { Text, TextInput, View } from 'react-native';

import { FieldProps } from './field.props';

const Field = <T extends Record<string, unknown>>({
	control,
	name,
	rules,
	className,
	...props
}: FieldProps<T>): JSX.Element => {
	return (
		<Controller
			control={control}
			name={name}
			rules={rules}
			render={({
				field: { value, onBlur, onChange },
				fieldState: { error }
			}) => (
				<>
					<View
						className={cn(
							`bg-[#232323] w-full border rounded-lg pb-4 pt-2.5 px-4 my-1.5`,
							error ? 'border-red' : 'border-transparent'
						)}
					>
						<TextInput
							autoCapitalize='none'
							onChangeText={onChange}
							onBlur={onBlur}
							value={(value || '').toString()}
							className='text-base text-white'
							{...props}
						/>
						{!!error?.message && (
							<Text className='text-red'>{error.message}</Text>
						)}
					</View>
				</>
			)}
		/>
	);
};

export default Field;
