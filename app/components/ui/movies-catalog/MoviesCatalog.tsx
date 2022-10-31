import { Ionicons } from '@expo/vector-icons';
import { FC } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';

import { Description, Heading, MovieCard } from '@app/components/ui';

import { useTypedNavigation } from '@app/hooks';

import { MoviesCatalogProps } from './movies-catalog.props';

const MoviesCatalog: FC<MoviesCatalogProps> = ({
	title,
	description,
	movies = [],
	isBackButton
}) => {
	const { goBack } = useTypedNavigation();
	const isMovies = movies.length > 0;

	return (
		<View>
			<View className='flex-row items-center justify-between'>
				<Heading title={title} className='mb-3' />
				{isBackButton && (
					<Pressable onPress={goBack}>
						<Ionicons
							name='arrow-back-circle-outline'
							size={32}
							color='white'
						/>
					</Pressable>
				)}
			</View>

			{!!description && <Description text={description} />}

			<ScrollView showsVerticalScrollIndicator={false}>
				<View className='flex-row flex-wrap justify-between mt-5 mb-32'>
					{isMovies &&
						movies.map((movie, index) => (
							<MovieCard
								movie={movie}
								index={index}
								key={movie._id}
								className='mb-6'
							/>
						))}
					{!isMovies && (
						<Text className='text-white text-lg'>Elements not found</Text>
					)}
				</View>
			</ScrollView>
		</View>
	);
};

export default MoviesCatalog;
