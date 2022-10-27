import { useAuth, useScaleOnMount } from '@app/hooks';
import { ScreenLayout } from '@app/layout';
import { AuthService } from '@app/services';
import { AntDesign } from '@expo/vector-icons';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Image, Pressable, Text, View } from 'react-native';
import Animated from 'react-native-reanimated';

import AuthFields from '@app/components/screens/auth/AuthFields';
import { useProfile } from '@app/components/screens/profile/useProfile';
import { Button, Heading, Loader } from '@app/components/ui';

import { AuthFormData } from '@app/shared/types';

const Profile: FC = () => {
	const { setUser } = useAuth();
	const { styleAnimation } = useScaleOnMount();

	const { handleSubmit, setValue, control } = useForm<AuthFormData>({
		mode: 'onChange'
	});

	const { isLoading, onSubmit } = useProfile(setValue);

	const handleLogout = async () => {
		await AuthService.logout();
		await setUser(null);
	};

	return (
		<ScreenLayout>
			<Heading title='Profile' />

			<Animated.View
				style={styleAnimation}
				className='my-6 items-center justify-center'
			>
				<Image
					source={require('@app/assets/avatar-guest.jpg')}
					className='w-40 h-40 rounded-2xl'
				/>
			</Animated.View>

			{isLoading && <Loader />}
			{!isLoading && (
				<View className='mb-10'>
					<AuthFields control={control} />
					<Button onPress={handleSubmit(onSubmit)} icon='edit'>
						Update Profile
					</Button>
				</View>
			)}

			<Pressable
				onPress={handleLogout}
				className='opacity-40 items-center flex-row justify-end'
			>
				<AntDesign name='logout' size={18} color='white' />
				<Text className='text-white text-lg ml-2'>Logout</Text>
			</Pressable>
		</ScreenLayout>
	);
};

export default Profile;
