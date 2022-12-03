import { useMutation } from '@tanstack/react-query';
import { MediaTypeOptions, launchImageLibraryAsync } from 'expo-image-picker';
import { useCallback, useMemo, useState } from 'react';

import { MediaService } from '@app/services';

import { UploadMediaType } from './field-upload.interface';

export const useUploadMedia: UploadMediaType = (onChange, isMovie, folder) => {
	const [isLoading, setIsLoading] = useState(false);

	const { mutateAsync } = useMutation(
		['upload-file'],
		(data: FormData) => MediaService.upload(data, folder),
		{
			onSuccess: (data) => {
				onChange(data[0].url);
			}
		}
	);

	const uploadFile = useCallback(async () => {
		const result = await launchImageLibraryAsync({
			mediaTypes: isMovie ? MediaTypeOptions.Videos : MediaTypeOptions.Images,
			allowsEditing: false,
			quality: 1
		});

		if (result.cancelled) {
			setIsLoading(false);
			return;
		}

		const uri = result.uri;
		const name = uri.split('/').pop() || '';

		const match = /\.(\w+)$/.exec(name);
		const type = match ? `image/${match[1]}` : 'image';

		const formData = new FormData();
		formData.append('file', { uri, type, name } as unknown as Blob);

		await mutateAsync(formData);
		setTimeout(() => setIsLoading(false), 1000);
	}, [mutateAsync]);

	return useMemo(() => ({ isLoading, uploadFile }), [isLoading, uploadFile]);
};
