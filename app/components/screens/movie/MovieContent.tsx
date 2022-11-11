import { useScrollToTop } from '@react-navigation/native';
import { FC, useRef } from 'react';
import { Animated, ScrollView, View } from 'react-native';

import ActorCarousel from './ActorCarousel';
import MovieInfo from './MovieInfo';
import RelatedMovies from './RelatedMovies';
import { MovieCommonProps } from './movie.interface';

const MovieContent: FC<MovieCommonProps> = ({ movie }) => {
	const ref = useRef<ScrollView>(null);
	const genresIds = movie.genres.map(({ _id }) => _id);
	useScrollToTop(ref);

	return (
		<Animated.ScrollView
			ref={ref}
			showsHorizontalScrollIndicator={false}
			scrollEventThrottle={16}
		>
			<MovieInfo movie={movie} />

			<View className='bg-[#090909] px-6 pt-1 pb-24'>
				{/*	TODO: Video player */}
				<ActorCarousel actors={movie.actors} />
				<RelatedMovies currentMovieId={movie._id} genreIds={genresIds} />
			</View>
		</Animated.ScrollView>
	);
};

export default MovieContent;
