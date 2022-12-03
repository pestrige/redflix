import { FieldError } from 'react-hook-form';
import { ViewStyle } from 'react-native';

import { OnChangeFieldType } from '@app/shared/types';

export interface FieldUploadProps {
	folder?: string;
	value?: string;
	onChange: OnChangeFieldType;
	placeholder: string;
	error?: FieldError;
	style?: ViewStyle;
	isNoImage?: boolean;
	gradient?: [string, string];
}

export type UploadMediaType = (
	onChange: OnChangeFieldType,
	isMovie: boolean,
	folder?: string
) => { uploadFile: () => Promise<void>; isLoading: boolean };
