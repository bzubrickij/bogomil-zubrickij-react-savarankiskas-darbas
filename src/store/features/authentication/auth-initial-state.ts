import { getLocalStorageItem } from '../../../helpers/local-storage-helpers';
import { AuthState } from './auth-types';

export const USER_KEY_IN_LOCAL_STORAGE = 'user';

export const initialState: AuthState = {
  user: getLocalStorageItem(USER_KEY_IN_LOCAL_STORAGE),
  error: null,
  loading: false,
};
