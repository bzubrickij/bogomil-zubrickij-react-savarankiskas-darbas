/* eslint-disable import/prefer-default-export */
import { RootState } from '../../../types/redux-types/redux-types';

export const selectRedirect = (state: RootState) => state.navigation.redirect;
