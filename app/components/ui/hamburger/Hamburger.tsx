import { FC } from 'react';
import Animated from 'react-native-reanimated';

import BlurButton from '@app/components/ui/blur-button/BlurButton';

import { HamburgerProps } from './hamburger.props';
import { useHamburgerAnimation } from './useHamburgerAnimation';

const lineClassName = 'w-6 h-0.5 bg-[#ecf0f1]';

const Hamburger: FC<HamburgerProps> = ({ onPress, isShown }) => {
	const animation = useHamburgerAnimation(isShown);

	return (
		<BlurButton size={24} className='w-12 h-12' onPress={onPress}>
			<Animated.View style={animation.bodyStyle}>
				<Animated.View
					className={lineClassName}
					style={animation.firstLineStyle}
				/>
				<Animated.View
					className={lineClassName}
					style={animation.secondLineStyle}
				/>
				<Animated.View
					className={lineClassName}
					style={animation.thirdLineStyle}
				/>
			</Animated.View>
		</BlurButton>
	);
};

export default Hamburger;
