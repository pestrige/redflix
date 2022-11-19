import { useQuery } from '@tanstack/react-query';

import { useTypedRoute } from '@app/hooks';

import { ActorService, MovieService } from '@app/services';

export const useActor = () => {
	const { params } = useTypedRoute<'Actor'>();

	const { isLoading, data: actor } = useQuery(
		['get-actor-by-slug', params?.slug],
		() => {
			return ActorService.getActorBySlug(params?.slug);
		}
	);

	const actorID = actor?._id ?? '';

	const { isLoading: isLoadingMovies, data: movies } = useQuery(
		['get-movies-by-actor', actorID],
		() => MovieService.getMovieByActor(actorID),
		{ enabled: !!actorID }
	);

	return { actor, movies, isLoading: isLoadingMovies || isLoading };
};
