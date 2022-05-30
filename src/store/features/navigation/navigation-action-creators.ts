import { NavigationActionType, NavigationClearRedirectionAction, NavigationSetRedirectionAction } from './navigation-types';

export const navigationClearRedirectAction: NavigationClearRedirectionAction = {
  type: NavigationActionType.NAVIGATION_CLEAR_REDIRECT,
};

export const createNavigationSetRedirectAction = (redirect: string): NavigationSetRedirectionAction => ({
  type: NavigationActionType.NAVIGATION_SET_REDIRECT,
  payload: { redirect },
});
