import { Feather } from '@expo/vector-icons';
import cn from 'clsx';
import { LinearGradient } from 'expo-linear-gradient';
import { FC } from 'react';
import { Image, Pressable, Text, View } from 'react-native';

import { Loader } from '@app/components/ui';

import { getMediaSource } from '@app/utils';

import { FieldUploadProps } from './field-upload.interface';
import { useUploadMedia } from './useUploadMedia';

const FieldUpload: FC<FieldUploadProps> = ({
	onChange,
	value,
	placeholder,
	folder,
	error,
	style,
	isNoImage = false,
	gradient = ['#1db052', '#178d42']
}) => {
	const { isLoading, uploadFile } = useUploadMedia(onChange, isNoImage, folder);

	return (
		<View
			className={cn(
				'bg-[#232323] w-full border rounded-lg py-2.5 px-4 my-1.5',
				error ? 'border-red' : 'border-transparent'
			)}
			style={style}
		>
			<View className='flex-row justify-between items-center'>
				<View>
					<Text className='text-white text-base font-medium'>
						{placeholder}
					</Text>
					<Pressable className='mt-2.5' onPress={uploadFile}>
						<LinearGradient
							start={{ x: 0, y: 0.75 }}
							end={{ x: 1, y: 0.25 }}
							className='w-full py-1.5 px-3 rounded-xl items-center flex-row'
							colors={gradient}
						>
							<Feather name='upload' size={18} color='#fff' />
							<Text className='text-base text-white ml-2'>
								Click for upload file
							</Text>
						</LinearGradient>
					</Pressable>

					{isNoImage && (
						<Text className='text-white opacity-40 mt-3' numberOfLines={1}>
							{value}
						</Text>
					)}
					{error && <Text className='text-red mt-1'>{error.message}</Text>}
				</View>

				{!isNoImage && (
					<View className='w-24 h-24 rounded-2xl overflow-hidden ml-5'>
						{isLoading ? (
							<Loader />
						) : (
							!!value && (
								<Image
									source={getMediaSource(value)}
									className='w-full h-full'
								/>
							)
						)}
					</View>
				)}
			</View>
		</View>
	);
};

export default FieldUpload;
