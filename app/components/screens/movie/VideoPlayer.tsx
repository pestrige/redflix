import { FC } from 'react';

import { Button } from '@app/components/ui';

const VideoPlayer: FC<{ video: string }> = ({ video }) => {
	return (
		<>
			<Button icon='play' className='mb-6'>
				Watch movie
			</Button>
		</>
	);
};

export default VideoPlayer;
