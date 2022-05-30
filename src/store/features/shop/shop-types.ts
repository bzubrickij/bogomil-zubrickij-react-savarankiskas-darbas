import { Product } from '../../../types/global-types';

export enum ShopActionType {
  SHOP_STATUS_LOADING = 'SHOP_STATUS_LOADING',
  SHOP_STATUS_FAIL = 'SHOP_STATUS_FAIL',
  SHOP_STATUS_SUCCESS = 'SHOP_STATUS_SUCCESS',
  SHOP_CHANGE_PRODUCT_AMOUNT = 'SHOP_CHANGE_PRODUCT_AMOUNT',
  SHOP_CLEAR_ERROR = 'SHOP_CLEAR_ERROR',
  CART_ADD_PRODUCT = 'CART_ADD_PRODUCT',
}

export type ShopState = {
  products: Product[],
  loading: boolean,
  error: string | null,
};

export type ShopLoadingAction = {
  type: ShopActionType.SHOP_STATUS_LOADING
};

export type ShopFailAction = {
  type: ShopActionType.SHOP_STATUS_FAIL
  payload: {
    error: string,
  }
};

export type ShopSuccessAction = {
  type: ShopActionType.SHOP_STATUS_SUCCESS,
  payload: {
    products: Product[],
  }

};

export type ShopChangeProductAmountAction = {
  type: ShopActionType.SHOP_CHANGE_PRODUCT_AMOUNT,
  payload: {
    id: string,
    amount: number
  },
};

export type ShopClearErrorAction = {
  type: ShopActionType.SHOP_CLEAR_ERROR
};

export type ShopAddProductToCardAction = {
  type: ShopActionType.CART_ADD_PRODUCT,
  payload: {
    product: Product,
  }
};

export type ShopDispatchTypes = ShopLoadingAction | ShopFailAction | ShopSuccessAction | ShopChangeProductAmountAction | ShopClearErrorAction | ShopAddProductToCardAction;
