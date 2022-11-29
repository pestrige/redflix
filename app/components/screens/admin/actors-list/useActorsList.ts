import { useMutation, useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import Toast from 'react-native-toast-message';

import { useSearchForm, useTypedNavigation } from '@app/hooks';

import { Actor, NavigateType, TableItem } from '@app/shared/types';

import { ActorService } from '@app/services';

const formatActors = (actors: Actor[], navigate: NavigateType): TableItem[] =>
	actors.map((actor) => ({
		_id: actor._id,
		editNavigate: () => navigate('ActorEdit', { id: actor._id }),
		items: [actor.name, `${actor.countMovies}`]
	}));

export const useActorsList = () => {
	const { debouncedSearchTerm, control } = useSearchForm();
	const { navigate } = useTypedNavigation();

	const queryData = useQuery(
		['get-actors-list', debouncedSearchTerm],
		() => ActorService.getAllActors(debouncedSearchTerm),
		{ select: (actors) => formatActors(actors, navigate) }
	);

	const { mutateAsync: createActorAsync } = useMutation(
		['create-actor'],
		() => ActorService.createActor(),
		{
			onSuccess: async (id) => {
				Toast.show({
					type: 'success',
					text1: 'Create actor',
					text2: 'create was successful'
				});
				await navigate('ActorEdit', { id });
			}
		}
	);

	const { mutateAsync: deleteActorAsync } = useMutation(
		['delete-actor'],
		(id: string) => ActorService.deleteActor(id),
		{
			onSuccess: async () => {
				Toast.show({
					type: 'success',
					text1: 'Delete actor',
					text2: 'delete was successful'
				});
				await queryData.refetch();
			}
		}
	);

	return useMemo(
		() => ({ control, ...queryData, createActorAsync, deleteActorAsync }),
		[control, queryData, createActorAsync, deleteActorAsync]
	);
};
