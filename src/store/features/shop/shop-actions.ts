import axios from 'axios';
import { Dispatch } from 'redux';
import { Product } from '../../../types/global-types';
import { AppAction } from '../../../types/redux-types/redux-types';
import * as ShopTypes from './shop-types';

const shopGetProductsLoadingAction: ShopTypes.ShopLoadingAction = {
  type: ShopTypes.ShopActionType.SHOP_STATUS_LOADING,
};

export const shopClearErrorAction: ShopTypes.ShopClearErrorAction = {
  type: ShopTypes.ShopActionType.SHOP_CLEAR_ERROR,
};

const createShopSuccessAction = (products: Product[]): ShopTypes.ShopSuccessAction => ({
  type: ShopTypes.ShopActionType.SHOP_STATUS_SUCCESS,
  payload: { products },
});

const createShopFailureAction = (error: string): ShopTypes.ShopFailAction => ({
  type: ShopTypes.ShopActionType.SHOP_STATUS_FAIL,
  payload: { error },
});

export const cartAddProductAction = (product: Product): ShopTypes.ShopAddProductToCardAction => ({
  type: ShopTypes.ShopActionType.CART_ADD_PRODUCT,
  payload: { product },
});

export const shopFetchItemsAction = async (dispatch: Dispatch<AppAction>): Promise<void> => {
  dispatch(shopGetProductsLoadingAction);
  try {
    const { data } = await axios.get<Product[]>('http://localhost:3003/products');
    const shopSuccessAction = createShopSuccessAction(data);
    dispatch(shopSuccessAction);
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : String(error);
    const shopFetchItemsFailureAction = createShopFailureAction(errMsg);
    dispatch(shopFetchItemsFailureAction);
  }
};
