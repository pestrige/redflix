import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Pressable, Text, View } from 'react-native';

import { Button, DismissKeyboard, Loader } from '@app/components/ui';

import { AuthFormData } from '@app/shared/types/auth.interface';

import AuthFields from './AuthFields';

const Auth: FC = () => {
	const [isRegistration, setIsRegistration] = useState(false);

	const { handleSubmit, reset, control } = useForm<AuthFormData>({
		mode: 'onSubmit'
	});

	const onSubmit: SubmitHandler<AuthFormData> = (data) => {
		const { email, password } = data;
	};

	const isLoading = false;

	return (
		<DismissKeyboard>
			<View className='mx-2 items-center justify-center h-full'>
				<View className='w-9/12'>
					<Text className='text-center text-white text-4xl font-bold mb-2.5'>
						{isRegistration ? 'Register' : 'Login'}
					</Text>
					{isLoading ? (
						<Loader />
					) : (
						<>
							<AuthFields control={control} isPassRequired={true} />
							<Button icon={'film'} onPress={handleSubmit(onSubmit)}>
								Go to watch
							</Button>
							<Pressable onPress={() => setIsRegistration(!isRegistration)}>
								<Text className='text-white opacity-30 text-right	text-base mt-3'>
									{isRegistration ? 'Login' : 'Register'}
								</Text>
							</Pressable>
						</>
					)}
				</View>
			</View>
		</DismissKeyboard>
	);
};

export default Auth;
