import { useContext } from 'react';

import { AuthContext } from '@app/providers/auth/AuthProvider';

export const useAuth = () => useContext(AuthContext);
