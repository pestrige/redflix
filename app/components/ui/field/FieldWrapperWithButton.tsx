import { FC, PropsWithChildren } from 'react';
import { Pressable, Text, View } from 'react-native';

interface Props {
	onButtonPress: () => void;
	buttonText?: string;
}

const FieldWrapperWithButton: FC<PropsWithChildren<Props>> = ({
	children,
	onButtonPress,
	buttonText = 'Generate'
}) => {
	return (
		<View>
			{children}
			<Pressable
				className='absolute top-5 right-3 cursor-pointer rounded-lg py-0.5 px-2 border-gray-500 bg-gray-500'
				onPress={onButtonPress}
			>
				<Text className='uppercase text-white'>{buttonText}</Text>
			</Pressable>
		</View>
	);
};

export default FieldWrapperWithButton;
