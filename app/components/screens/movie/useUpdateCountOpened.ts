import { useMutation } from '@tanstack/react-query';
import { useEffect } from 'react';

import { useTypedRoute } from '@app/hooks';

import { MovieService } from '@app/services';

export const useUpdateCountOpened = () => {
	const { params } = useTypedRoute<'Movie'>();
	const { mutate } = useMutation(['update-count-opened'], () =>
		MovieService.updateViewsCount(params.slug)
	);

	useEffect(() => {
		mutate();
	}, []);
};
