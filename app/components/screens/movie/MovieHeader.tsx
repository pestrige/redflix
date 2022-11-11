import { FC } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { BlurButton, FavoriteButton, Rating } from '@app/components/ui';

import { useTypedNavigation } from '@app/hooks';

import { Movie } from '@app/shared/types';

interface MovieHeaderProps {
	movie: Movie;
}

const MovieHeader: FC<MovieHeaderProps> = ({ movie }) => {
	const { goBack } = useTypedNavigation();
	const { top } = useSafeAreaInsets();
	const { title, rating, _id } = movie;

	return (
		<View
			className='absolute left-0 top-0 w-full z-1 flex-row justify-between items-center px-6 pb-4'
			style={{ marginTop: -top, paddingTop: top + 6 }}
		>
			<Animated.View
				style={{ ...StyleSheet.absoluteFillObject }}
				className='bg-[#0D0404]'
			/>
			<BlurButton icon='chevron-left' size={23} onPress={goBack} />

			<Animated.View className='items-center w-2/3'>
				<Text
					className='text-white font-semibold text-2xl mb-0.5 px-2'
					numberOfLines={1}
				>
					{title}
				</Text>
				<Rating rating={rating} size={14} />
			</Animated.View>

			<FavoriteButton movieID={_id} />
		</View>
	);
};

export default MovieHeader;
