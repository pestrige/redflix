import { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ScrollView, View } from 'react-native';

import { AdminLayout } from '@app/layout';

import {
	Button,
	Dropdown,
	Field,
	FieldUpload,
	FieldWrapperWithButton,
	Loader
} from '@app/components/ui';

import { MovieEditInput } from '@app/shared/types';

import { generateSlug } from '@app/utils';

import { useDropdownOptions } from './useDropdownOptions';
import { useMovieEdit } from './useMovieEdit';

const MovieEdit: FC = () => {
	const { control, setValue, getValues, handleSubmit } =
		useForm<MovieEditInput>();
	const { isLoading, onSubmit } = useMovieEdit(setValue);
	const { isGenresLoading, isActorsLoading, genres, actors } =
		useDropdownOptions();

	const handleGenerateButton = () =>
		setValue('slug', generateSlug(getValues('title')));

	return (
		<AdminLayout title='Movie Edit' isBackButton={true}>
			<View>
				{isLoading && <Loader />}

				{!isLoading && (
					<ScrollView showsVerticalScrollIndicator={false}>
						<View className='pb-32'>
							<Field<MovieEditInput>
								control={control}
								name='title'
								placeholder='Enter a title'
								rules={{ required: 'Title is required' }}
							/>

							<FieldWrapperWithButton onButtonPress={handleGenerateButton}>
								<Field<MovieEditInput>
									control={control}
									name='slug'
									placeholder='Generate slug'
									rules={{ required: 'Slug is required' }}
								/>
							</FieldWrapperWithButton>

							<Field<MovieEditInput>
								control={control}
								name='parameters.country'
								placeholder='Enter a country'
								rules={{ required: 'Country is required' }}
							/>

							<View className='flex-row justify-between flex-wrap'>
								<View style={{ width: '56%' }}>
									<Field<MovieEditInput>
										control={control}
										name='parameters.duration'
										placeholder='Enter a duration (min.)'
										rules={{ required: 'Duration is required' }}
										keyboardType='number-pad'
									/>
								</View>
								<View style={{ width: '40%' }}>
									<Field<MovieEditInput>
										control={control}
										name='parameters.year'
										placeholder='Enter a year'
										rules={{ required: 'Year is required' }}
										keyboardType='number-pad'
									/>
								</View>
							</View>

							<Controller
								control={control}
								name='genres'
								render={({ field, fieldState }) => (
									<Dropdown
										field={field}
										error={fieldState.error}
										isLoading={isGenresLoading}
										options={genres}
										style={{ zIndex: 11 }}
									/>
								)}
								rules={{ required: 'Select at least one genre' }}
							/>

							<Controller
								control={control}
								name='actors'
								render={({ field, fieldState }) => (
									<Dropdown
										field={field}
										options={actors}
										isLoading={isActorsLoading}
										error={fieldState.error}
									/>
								)}
								rules={{ required: 'Select at least one actor' }}
							/>

							<Controller
								control={control}
								name='poster'
								defaultValue=''
								render={({ field, fieldState }) => (
									<FieldUpload
										onChange={field.onChange}
										value={field.value}
										placeholder='Poster'
										error={fieldState.error}
										folder='movies'
									/>
								)}
								rules={{ required: 'Poster is required' }}
							/>

							<Controller
								control={control}
								name='videoUrl'
								render={({ field: { onChange, value }, fieldState }) => (
									<FieldUpload
										onChange={onChange}
										value={value}
										placeholder='Trailer'
										error={fieldState.error}
										folder='movies'
										isNoImage={true}
										gradient={['#4361a6', '#254584']}
									/>
								)}
								rules={{ required: 'Trailer is required' }}
							/>

							<Button icon='pen-tool' onPress={handleSubmit(onSubmit)}>
								Update
							</Button>
						</View>
					</ScrollView>
				)}
			</View>
		</AdminLayout>
	);
};

export default MovieEdit;
