import { Colors } from '@app/config';
import { FC } from 'react';
import { ActivityIndicator } from 'react-native';

const Loader: FC = () => {
	return <ActivityIndicator size='large' color={Colors.primary} />;
};

export default Loader;
