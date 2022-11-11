import { Entypo } from '@expo/vector-icons';
import { FC } from 'react';

import { DotIconProps } from './dot-icon.props';

const DotIcon: FC<DotIconProps> = ({
	size = 18,
	color = 'rgba(255,255,255,0.5)',
	style = { marginLeft: 4 }
}) => {
	return <Entypo name='dot-single' style={style} color={color} size={size} />;
};

export default DotIcon;
