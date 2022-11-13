import { Audio, ResizeMode, Video } from 'expo-av';
import { FC, useEffect, useRef } from 'react';
import { View } from 'react-native';

import { Button } from '@app/components/ui';

import { getMediaSource } from '@app/utils';

const VideoPlayer: FC<{ video: string }> = ({ video }) => {
	const videoRef = useRef<Video>(null);

	const handlePlayPress = async () => {
		await videoRef.current?.presentFullscreenPlayer();
		await videoRef.current?.playAsync();
	};

	useEffect(() => {
		(async () => {
			await Audio.setAudioModeAsync({
				allowsRecordingIOS: false,
				playsInSilentModeIOS: true,
				staysActiveInBackground: false,
				shouldDuckAndroid: false
			});
			await videoRef.current?.stopAsync();
		})();
	}, []);

	return (
		<>
			<Button icon='play' className='mb-10' onPress={handlePlayPress}>
				Watch movie
			</Button>
			<View>
				<Video
					ref={videoRef}
					source={getMediaSource(video)}
					style={{ height: 180 }}
					className='mb-5 w-full hidden'
					shouldPlay={true}
					useNativeControls={true}
					resizeMode={ResizeMode.CONTAIN}
				/>
			</View>
		</>
	);
};

export default VideoPlayer;
