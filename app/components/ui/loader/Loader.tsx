import { FC } from 'react';
import { ActivityIndicator } from 'react-native';

import { Colors } from '@app/config';

const Loader: FC = () => {
	return <ActivityIndicator size='large' color={Colors.primary} />;
};

export default Loader;
