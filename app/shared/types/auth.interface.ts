import { User } from './user.interface';

export interface AuthFormData extends Pick<User, 'email' | 'password'> {}
