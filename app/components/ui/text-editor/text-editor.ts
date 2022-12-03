import { FieldError } from 'react-hook-form';

import { OnChangeFieldType } from '@app/shared/types';

export interface TextEditorProps {
	onChange: OnChangeFieldType;
	value: string;
	error?: FieldError;
	placeholder?: string;
}
