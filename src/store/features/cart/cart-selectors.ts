import { RootState } from '../../../types/redux-types/redux-types';

export const selectCartItems = (state: RootState) => state.cart.products;
export const selectCartItemsCount = (state: RootState) => state.cart.products.length;
