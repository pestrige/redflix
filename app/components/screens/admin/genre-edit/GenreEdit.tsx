import { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ScrollView, View } from 'react-native';

import { AdminLayout } from '@app/layout';

import {
	Button,
	Field,
	FieldWrapperWithButton,
	Loader,
	TextEditor
} from '@app/components/ui';

import { GenreEditInput } from '@app/shared/types';

import { generateSlug } from '@app/utils';

import { useGenreEdit } from './useGenreEdit';

const validateTextEditValue = (value: string) => {
	const clearedHTML = value.replace(/<(.|\n)*?>/g, '');
	const valueWithoutSpaces = clearedHTML.replace(/&nbspb;/g, '').trim();

	return valueWithoutSpaces.length > 0 || 'Description is required';
};

const GenreEdit: FC = () => {
	const { control, setValue, handleSubmit, getValues } =
		useForm<GenreEditInput>();
	const { isLoading, onSubmit } = useGenreEdit(setValue);

	const onGenerateButtonPress = () =>
		setValue('slug', generateSlug(getValues('name')));

	return (
		<AdminLayout title='Edit genre' isBackButton={true}>
			<View>
				{isLoading && <Loader />}

				{!isLoading && (
					<ScrollView showsVerticalScrollIndicator={false}>
						<Field<GenreEditInput>
							control={control}
							name='name'
							rules={{ required: 'Name is required' }}
							placeholder='Enter a name'
						/>

						<FieldWrapperWithButton onButtonPress={onGenerateButtonPress}>
							<Field<GenreEditInput>
								control={control}
								name='slug'
								rules={{ required: 'Slug is required' }}
								placeholder='Enter a slug'
							/>
						</FieldWrapperWithButton>

						<Controller
							control={control}
							name='description'
							render={({ field, fieldState }) => (
								<TextEditor
									onChange={field.onChange}
									value={field.value}
									error={fieldState.error}
								/>
							)}
							rules={{ validate: validateTextEditValue }}
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

export default GenreEdit;
