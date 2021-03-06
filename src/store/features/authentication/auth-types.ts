import { User } from '../../../types/global-types/user';

export type AuthState = {
  user: User | null,
  error: string | null,
  loading: boolean,
};

export enum AuthActionType {
  AUTH_LOADING = 'AUTH_LOADING',
  AUTH_LOGOUT = 'AUTH_LOGOUT',
  AUTH_CLEAR_ERROR = 'AUTH_CLEAR_ERROR',
  AUTH_SUCCESS = 'AUTH_SUCCESS',
  AUTH_FAILURE = 'AUTH_FAILURE',
}

export type AuthLoadingAction = {
  type: AuthActionType.AUTH_LOADING,
};

export type AuthLogoutAction = {
  type: AuthActionType.AUTH_LOGOUT,
};

export type AuthClearErrorAction = {
  type: AuthActionType.AUTH_CLEAR_ERROR,
};

export type AuthSuccessAction = {
  type: AuthActionType.AUTH_SUCCESS,
  payload: {
    user: User,
  }
};

export type AuthFailureAction = {
  type: AuthActionType.AUTH_FAILURE,
  payload: {
    error: string,
  }
};

export type AuthDispatchType = AuthSuccessAction | AuthFailureAction | AuthLoadingAction | AuthLogoutAction | AuthClearErrorAction;
