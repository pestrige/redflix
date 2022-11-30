import Checkbox from 'expo-checkbox';
import { FC } from 'react';
import { Control, Controller, useForm } from 'react-hook-form';
import { Pressable, Text, View } from 'react-native';

import { AdminLayout } from '@app/layout';

import AuthFields from '@app/components/screens/auth/AuthFields';
import { Button, Loader } from '@app/components/ui';

import { AuthFormData, UserEditInput } from '@app/shared/types';

import { useUserEdit } from './useUserEdit';

const UserEdit: FC = () => {
	const { control, setValue, handleSubmit } = useForm<UserEditInput>({
		mode: 'onChange'
	});
	const { isLoading, onSubmit } = useUserEdit(setValue);

	return (
		<AdminLayout title='Edit user' isBackButton={true}>
			<View>
				{isLoading && <Loader />}
				{!isLoading && (
					<>
						<AuthFields control={control as unknown as Control<AuthFormData>} />
						<Controller
							control={control}
							name='isAdmin'
							render={({ field: { onChange, value } }) => (
								<Pressable
									onPress={() => onChange(!value)}
									className='w-40 my-5 flex-row items-center'
								>
									<Checkbox
										className='mr-3'
										value={value}
										onValueChange={() => onChange(!value)}
										color={value ? '#DC3F41' : undefined}
									/>
									<Text className='text-white underline text-base'>
										as administrator
									</Text>
								</Pressable>
							)}
						/>
						<Button onPress={handleSubmit(onSubmit)} icon='pen-tool'>
							Update
						</Button>
					</>
				)}
			</View>
		</AdminLayout>
	);
};

export default UserEdit;
