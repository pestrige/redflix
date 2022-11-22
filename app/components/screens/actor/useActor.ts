import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

import { useTypedNavigation, useTypedRoute } from '@app/hooks';

import { ActorService, MovieService } from '@app/services';

export const useActor = () => {
	const { params } = useTypedRoute<'Actor'>();
	const { navigate } = useTypedNavigation();

	const { isLoading, data: actor } = useQuery(
		['get-actor-by-slug', params?.slug],
		() => ActorService.getActorBySlug(params?.slug),
		{ enabled: !!params?.slug }
	);

	const actorID = actor?._id ?? '';

	const { isLoading: isLoadingMovies, data: movies } = useQuery(
		['get-movies-by-actor', actorID],
		() => MovieService.getMovieByActor(actorID),
		{ enabled: !!actorID }
	);

	useEffect(() => {
		if (params?.slug === undefined) {
			navigate('Home');
		}
	}, []);

	return { actor, movies, isLoading: isLoadingMovies || isLoading };
};
