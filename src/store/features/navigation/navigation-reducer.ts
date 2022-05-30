/* eslint-disable @typescript-eslint/default-param-last */
import { Reducer } from 'redux';
import initialState from './navigation-initial-state';
import { NavigationActionType, NavigationDispatchType, NavigationState } from './navigation-types';

const navigationReducer: Reducer<NavigationState, NavigationDispatchType> = (state = initialState, action) => {
  switch (action.type) {
    case NavigationActionType.NAVIGATION_CLEAR_REDIRECT: {
      return {
        ...state,
        redirect: null,
      };
    }

    case NavigationActionType.NAVIGATION_SET_REDIRECT: {
      return {
        ...state,
        redirect: action.payload.redirect,
      };
    }

    default: return state;
  }
};

export default navigationReducer;
