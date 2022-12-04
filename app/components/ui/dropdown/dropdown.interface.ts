import { ControllerRenderProps, FieldError } from 'react-hook-form';
import { ViewStyle } from 'react-native';
import { ItemType } from 'react-native-dropdown-picker';

export interface DropdownProps {
	options?: ItemType<any>[];
	field: ControllerRenderProps<any, any>;
	isMulti?: boolean;
	isLoading?: boolean;
	error?: FieldError;
	style?: ViewStyle;
}
