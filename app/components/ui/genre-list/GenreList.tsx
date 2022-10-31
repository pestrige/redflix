import { FC } from 'react';
import { Pressable, Text, View } from 'react-native';

import { useTypedNavigation } from '@app/hooks';

import { GenreListProps } from './genre-list.props';

const GenreList: FC<GenreListProps> = ({ genres }) => {
	const { navigate } = useTypedNavigation();

	return (
		<View className='flex-row gap-3'>
			{genres.map((genre) => (
				<Pressable
					onPress={() => navigate('Genre', { slug: genre.slug })}
					key={genre._id}
					className='rounded-2xl bg-gray py-1.5 px-3'
				>
					<Text className='text-white'>{genre.name}</Text>
				</Pressable>
			))}
		</View>
	);
};

export default GenreList;
