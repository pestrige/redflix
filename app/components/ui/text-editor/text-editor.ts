import { FieldError } from 'react-hook-form';

export interface TextEditorProps {
	onChange: (...event: any[]) => void;
	value: string;
	error?: FieldError;
	placeholder?: string;
}
