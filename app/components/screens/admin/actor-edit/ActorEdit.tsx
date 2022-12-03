import { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ScrollView, View } from 'react-native';

import { AdminLayout } from '@app/layout';

import {
	Button,
	Field,
	FieldUpload,
	FieldWrapperWithButton,
	Loader
} from '@app/components/ui';

import { ActorEditInput } from '@app/shared/types';

import { generateSlug } from '@app/utils';

import { useActorEdit } from './useActorEdit';

const ActorEdit: FC = () => {
	const { control, setValue, getValues, handleSubmit } =
		useForm<ActorEditInput>();
	const { isLoading, onSubmit } = useActorEdit(setValue);

	const onGenerateButtonPress = () =>
		setValue('slug', generateSlug(getValues('name')));

	return (
		<AdminLayout title='Actor edit' isBackButton={true}>
			<View className='w-full h-full'>
				{isLoading && <Loader />}

				{!isLoading && (
					<ScrollView showsVerticalScrollIndicator={false}>
						<Field<ActorEditInput>
							control={control}
							name='name'
							rules={{ required: 'Name is required' }}
							placeholder='Enter a name'
						/>

						<FieldWrapperWithButton onButtonPress={onGenerateButtonPress}>
							<Field<ActorEditInput>
								control={control}
								name='slug'
								rules={{ required: 'Slug is required' }}
								placeholder='generate slug'
							/>
						</FieldWrapperWithButton>

						<Controller
							name='photo'
							control={control}
							defaultValue=''
							render={({ field, fieldState }) => (
								<FieldUpload
									onChange={field.onChange}
									value={field.value}
									placeholder='Poster'
									error={fieldState.error}
									folder='actors'
								/>
							)}
							rules={{ required: 'Poster is required' }}
						/>

						<Button onPress={handleSubmit(onSubmit)} icon='pen-tool'>
							Update
						</Button>
					</ScrollView>
				)}
			</View>
		</AdminLayout>
	);
};

export default ActorEdit;
