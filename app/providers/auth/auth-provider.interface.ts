import { Dispatch, SetStateAction } from 'react';

import { User } from '@app/shared/types/user.interface';

export type UserState = User | null;

export interface IAuthContext {
	user: UserState;
	setUser: Dispatch<SetStateAction<UserState>>;
}
