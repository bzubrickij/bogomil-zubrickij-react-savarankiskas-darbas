import { Dispatch } from 'redux';
import * as AuthTypes from './auth-types';
import AuthService, { AuthPromise } from './auth-service';
import {
  createNavigationSetRedirectAction,
  navigationClearRedirectAction,
} from '../navigation/navigation-action-creators';
import { User } from '../../../types/global-types/user';
import { AppAction } from '../../../types/redux-types/redux-types';
import { Credentials, Registration } from '../../../types/global-types';

const authLoadingAction: AuthTypes.AuthLoadingAction = {
  type: AuthTypes.AuthActionType.AUTH_LOADING,
};

export const authClearErrorAction: AuthTypes.AuthClearErrorAction = {
  type: AuthTypes.AuthActionType.AUTH_CLEAR_ERROR,
};

export const authLogoutAction: AuthTypes.AuthLogoutAction = {
  type: AuthTypes.AuthActionType.AUTH_LOGOUT,
};

const createAuthSuccessAction = (user: User): AuthTypes.AuthSuccessAction => ({
  type: AuthTypes.AuthActionType.AUTH_SUCCESS,
  payload: { user },
});

const createAuthFailureAction = (error: string): AuthTypes.AuthFailureAction => ({
  type: AuthTypes.AuthActionType.AUTH_FAILURE,
  payload: { error },
});

const authenticate = async (
  dispatch: Dispatch<AppAction>,
  authCallback: AuthPromise,
  authCallbackArgs: Parameters<AuthPromise>,
  redirect: string,
) => {
  dispatch(authLoadingAction);
  try {
    const user = await authCallback(...authCallbackArgs);
    const authSuccessAction = createAuthSuccessAction(user);
    const navigationSetRedirectAction = createNavigationSetRedirectAction(redirect);
    dispatch(navigationSetRedirectAction);
    dispatch(authSuccessAction);
    dispatch(navigationClearRedirectAction);
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : String(error);
    const authFailureAction = createAuthFailureAction(errMsg);
    dispatch(authFailureAction);
  }
};

export const createLoginAction = (
  crudentials: Credentials,
  redirect: string,
) => async (dispatch: Dispatch<AppAction>): Promise<void> => {
  await authenticate(dispatch, AuthService.login, [crudentials], redirect);
};

export const createRegisterAction = (
  userRegistration: Registration,
  redirect: string,
) => async (dispatch: Dispatch<AppAction>): Promise<void> => {
  await authenticate(dispatch, AuthService.register, [userRegistration], redirect);
};
