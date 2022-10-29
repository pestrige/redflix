import { UserService } from '@app/services';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

import { useFavorites } from '@app/components/screens/favorites/useFavorites';

export const useFavorite = (movieID: string) => {
	const [isSmashed, setIsSmashed] = useState(false);

	const { favoriteMovies } = useFavorites();

	const queryClient = useQueryClient();

	const { mutate: toggleFavorite } = useMutation(
		['update-favorites'],
		() => UserService.toggleFavorite(movieID),
		{
			async onSuccess() {
				await queryClient.invalidateQueries(['favorite-movies']);
			}
		}
	);

	useEffect(() => {
		if (!favoriteMovies) {
			return;
		}

		const isHasFavorite = favoriteMovies.some(({ _id }) => _id === movieID);

		if (isHasFavorite !== isSmashed) {
			setIsSmashed(isHasFavorite);
		}
	}, [favoriteMovies, isSmashed, movieID]);

	return { isSmashed, toggleFavorite };
};
