export interface User {
	_id: string;
	email: string;
	password: string;
	createdAt: string;
	isAdmin: boolean;
}

export interface UserEditInput extends Omit<User, '_id' | 'createdAt'> {}
