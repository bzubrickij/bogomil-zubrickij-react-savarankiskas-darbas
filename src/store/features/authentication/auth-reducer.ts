/* eslint-disable @typescript-eslint/default-param-last */
import { Reducer } from 'redux';
import { setLocalStoreageItem } from '../../../helpers/local-storage-helpers';
import { USER_KEY_IN_LOCAL_STORAGE, initialState } from './auth-initial-state';
import { AuthState, AuthActionType, AuthDispatchType } from './auth-types';

const authReducer: Reducer<AuthState, AuthDispatchType> = (state = initialState, action) => {
  switch (action.type) {
    case AuthActionType.AUTH_SUCCESS: {
      setLocalStoreageItem(USER_KEY_IN_LOCAL_STORAGE, action.payload.user);
      return {
        ...state,
        user: action.payload.user,
        loading: false,
      };
    }

    case AuthActionType.AUTH_FAILURE: {
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    }

    case AuthActionType.AUTH_LOGOUT: {
      localStorage.removeItem(USER_KEY_IN_LOCAL_STORAGE);
      return {
        ...state,
        user: null,
      };
    }

    case AuthActionType.AUTH_CLEAR_ERROR: {
      return {
        ...state,
        error: null,
      };
    }

    case AuthActionType.AUTH_LOADING: {
      return {
        ...state,
        error: null,
        loading: true,
      };
    }

    default: return state;
  }
};

export default authReducer;
