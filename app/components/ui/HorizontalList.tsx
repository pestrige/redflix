import { memo } from 'react';
import { FlatList, FlatListProps, Platform } from 'react-native';

interface HorizontalListProps<T> extends FlatListProps<T> {}

const HorizontalList = ({
	data,
	renderItem,
	...props
}: HorizontalListProps<any>): JSX.Element => {
	return (
		<FlatList
			horizontal={true}
			renderToHardwareTextureAndroid={true}
			showsHorizontalScrollIndicator={false}
			scrollEventThrottle={16}
			decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
			data={data}
			renderItem={renderItem}
			{...props}
		/>
	);
};

export default memo(HorizontalList);
