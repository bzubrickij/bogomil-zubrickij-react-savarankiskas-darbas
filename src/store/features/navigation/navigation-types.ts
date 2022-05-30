export type NavigationState = {
  redirect: string | null;
};

export enum NavigationActionType {
  NAVIGATION_CLEAR_REDIRECT = 'NAVIGATION_CLEAR_REDIRECT',
  NAVIGATION_SET_REDIRECT = 'NAVIGATION_SET_REDIRECT',
}

export type NavigationClearRedirectionAction = {
  type: NavigationActionType.NAVIGATION_CLEAR_REDIRECT,
};

export type NavigationSetRedirectionAction = {
  type: NavigationActionType.NAVIGATION_SET_REDIRECT,
  payload: {
    redirect: string
  }
};

export type NavigationDispatchType = NavigationClearRedirectionAction | NavigationSetRedirectionAction;
