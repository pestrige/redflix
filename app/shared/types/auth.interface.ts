import { User } from './user.interface';

export interface AuthFormData extends Pick<User, 'email' | 'password'> {}

export interface AuthResponse extends Tokens {
	user: User;
}

export enum EnumSecureStore {
	ACCESS_TOKEN = 'accessToken ',
	REFRESH_TOKEN = 'refreshToken'
}

export enum EnumAsyncStorage {
	USER = 'user'
}

export interface Tokens {
	accessToken: string;
	refreshToken: string;
}
