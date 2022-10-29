import { SERVER_URL } from '@app/config/api.config';

export const getMediaSource = (path: string) => ({ uri: SERVER_URL + path });
