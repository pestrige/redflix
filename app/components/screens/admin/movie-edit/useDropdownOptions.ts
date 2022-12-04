import { useQuery } from '@tanstack/react-query';

import { ActorService, GenreService } from '@app/services';

export const useDropdownOptions = () => {
	const { isLoading: isGenresLoading, data: genres } = useQuery(
		['get-genres-list'],
		() => GenreService.getAllGenres(),
		{
			select: (data) =>
				data.map(({ name, _id }) => ({ label: name, value: _id }))
		}
	);
	const { isLoading: isActorsLoading, data: actors } = useQuery(
		['get-actors-list'],
		() => ActorService.getAllActors(),
		{
			select: (data) =>
				data.map((actor) => ({
					label: actor.name,
					value: actor._id
				}))
		}
	);

	return { isGenresLoading, isActorsLoading, genres, actors };
};
