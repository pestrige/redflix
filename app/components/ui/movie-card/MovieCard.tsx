import cn from 'clsx';
import { BlurView } from 'expo-blur';
import { FC } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import Animated from 'react-native-reanimated';

import FavoriteButton from '@app/components/ui/favorite-button/FavoriteButton';
import Rating from '@app/components/ui/rating/Rating';

import { useTypedNavigation, useTypedRoute } from '@app/hooks';

import { getMediaSource } from '@app/utils';

import { MovieCardProps } from './movie-card.props';
import { useMovieCardAnimation } from './useMovieCardAnimation';

const ReanimatedPressable = Animated.createAnimatedComponent(Pressable);

const MovieCard: FC<MovieCardProps> = ({ index, movie, className }) => {
	const { navigate } = useTypedNavigation();
	const { name } = useTypedRoute();
	const { animatedStyle } = useMovieCardAnimation(index);
	const { _id, poster, slug, rating, title } = movie;
	const isFavoritePage = name === 'Favorites';

	const handlePress = () => {
		navigate('Movie', { slug });
	};

	return (
		<ReanimatedPressable
			style={animatedStyle}
			onPress={handlePress}
			className={cn(className, 'rounded-xl overflow-hidden h-56 w-40')}
		>
			{isFavoritePage && (
				<View className='absolute z-1 right-1.5 top-1.5'>
					<FavoriteButton movieID={_id} isSmall={true} />
				</View>
			)}
			<Image
				source={getMediaSource(poster)}
				style={{ resizeMode: 'cover', ...StyleSheet.absoluteFillObject }}
			/>

			<BlurView
				intensity={25}
				className='absolute w-full bottom-0 left-0 right-0 items-center pt-0.5 px-2'
			>
				<View className='-ml-2 -mb-0.5'>
					<Rating rating={rating} size={16} />
				</View>
				<Text
					className='text-white text-lg font-semibold mb-1'
					numberOfLines={1}
				>
					{title}
				</Text>
			</BlurView>
		</ReanimatedPressable>
	);
};

export default MovieCard;
