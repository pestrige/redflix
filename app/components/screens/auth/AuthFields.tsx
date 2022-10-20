import { FC } from 'react';
import { Control } from 'react-hook-form';
import { Text, View } from 'react-native';

import { Field } from '@app/components/ui';

import { validEmail } from '@app/shared/regex';
import { AuthFormData } from '@app/shared/types/auth.interface';

interface AuthFieldsProps {
	control: Control<AuthFormData>;
	isPassRequired?: boolean;
}

const AuthFields: FC<AuthFieldsProps> = ({ control, isPassRequired }) => {
	return (
		<>
			<Field<AuthFormData>
				placeholder='Enter email'
				control={control}
				name='email'
				rules={{
					required: 'Email is required',
					pattern: { value: validEmail, message: 'Please enter a valid email' }
				}}
				keyboardType='email-address'
			/>

			<Field<AuthFormData>
				placeholder='Enter password'
				control={control}
				name='password'
				secureTextEntry={true}
				rules={
					isPassRequired
						? {
								required: 'Password is required',
								minLength: {
									value: 6,
									message: 'Password should be minimum 6 characters long'
								}
						  }
						: undefined
				}
			/>
		</>
	);
};

export default AuthFields;
