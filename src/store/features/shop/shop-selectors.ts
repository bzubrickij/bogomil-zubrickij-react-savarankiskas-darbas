import { RootState } from '../../../types/redux-types/redux-types';

export const selectShopItems = (state: RootState) => state.shop.products;
export const selectShopItemsLoading = (state: RootState) => state.shop.loading;
export const selectShopError = (state: RootState) => state.shop.error;
