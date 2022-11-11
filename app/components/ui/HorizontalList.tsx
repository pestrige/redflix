import { memo } from 'react';
import {
	FlatList,
	FlatListProps,
	ListRenderItem,
	Platform
} from 'react-native';

// const HorizontalList = <T extends any>(
// 	props: FlatListProps<T>
// ): JSX.Element => {
// 	return (
// 		<FlatList
// 			horizontal={true}
// 			renderToHardwareTextureAndroid={true}
// 			showsHorizontalScrollIndicator={false}
// 			scrollEventThrottle={16}
// 			decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
// 			{...props}
// 		/>
// 	);
// };

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
