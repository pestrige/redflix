import { FC } from 'react';
import { View, useWindowDimensions } from 'react-native';
import RenderHTML, { MixedStyleDeclaration } from 'react-native-render-html';

import { DescriptionProps } from './description.props';

const styles: Record<string, MixedStyleDeclaration> = {
	body: { color: 'white', fontSize: 17, fontWeight: '300', opacity: 0.5 }
};

const Description: FC<DescriptionProps> = ({ text, className }) => {
	const { width } = useWindowDimensions();
	const html = text.includes('<p>') ? text : `<p>${text}</p>`;

	return (
		<View className={className}>
			<RenderHTML source={{ html }} contentWidth={width} tagsStyles={styles} />
		</View>
	);
};

export default Description;
