import { useScrollToTop } from '@react-navigation/native';
import { FC, useRef } from 'react';
import { Animated, ScrollView, View } from 'react-native';

import ActorCarousel from './ActorCarousel';
import MovieInfo from './MovieInfo';
import RelatedMovies from './RelatedMovies';
import VideoPlayer from './VideoPlayer';
import { HEADER_HEIGHT } from './movie.constant';
import { MovieCommonProps } from './movie.interface';

const MovieContent: FC<MovieCommonProps> = ({ movie, y }) => {
	const ref = useRef<ScrollView>(null);
	const genresIds = movie.genres.map(({ _id }) => _id);
	useScrollToTop(ref);

	return (
		<Animated.ScrollView
			ref={ref}
			showsVerticalScrollIndicator={false}
			scrollEventThrottle={16}
			onScroll={Animated.event([{ nativeEvent: { contentOffset: { y } } }], {
				useNativeDriver: true
			})}
			contentContainerStyle={{ paddingTop: HEADER_HEIGHT / 1.3 }}
		>
			<MovieInfo movie={movie} y={y} />

			<View className='bg-[#090909] px-6 pt-1 pb-32'>
				<VideoPlayer video={movie.videoUrl} />
				<ActorCarousel actors={movie.actors} />
				<RelatedMovies currentMovieId={movie._id} genreIds={genresIds} />
			</View>
		</Animated.ScrollView>
	);
};

export default MovieContent;
