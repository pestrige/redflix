import { FC } from 'react';
import {
	Image,
	ListRenderItemInfo,
	Pressable,
	StyleSheet,
	Text,
	View
} from 'react-native';

import { HorizontalList } from '@app/components/ui';

import { useTypedNavigation } from '@app/hooks';

import { Actor } from '@app/shared/types/movie.interface';

import { getMediaSource } from '@app/utils';

const ActorCarousel: FC<{ actors: Actor[] }> = ({ actors }) => {
	const { navigate } = useTypedNavigation();

	return (
		<HorizontalList
			data={actors}
			renderItem={({ item: actor }: ListRenderItemInfo<Actor>) => (
				<Pressable
					onPress={() => navigate('Actor', { slug: actor.slug })}
					className='flex-row items-center rounded-xl overflow-hidden w-48 mr-4'
					style={styles.button}
				>
					<Image
						source={getMediaSource(actor.photo)}
						className='h-full'
						style={styles.image}
					/>
					<View className='p-3 w-11/12'>
						<Text
							className='text-white text-base font-medium pr-7'
							numberOfLines={1}
						>
							{actor.name}
						</Text>
					</View>
				</Pressable>
			)}
		/>
	);
};

const styles = StyleSheet.create({
	button: { height: 72, backgroundColor: 'rgba(255, 255, 255, 0.07)' },
	image: { width: 50, resizeMode: 'cover' }
});

export default ActorCarousel;
