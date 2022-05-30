import { Product } from '../../../types/global-types';

export type CartProduct = {
  id?: string;
  shopProductId?: string;
  title: string;
  price: string;
  discount: string;
};

export type CartState = {
  products: Product[],
};

export enum CartActionType {
  CART_ADD_PRODUCT = 'CART_ADD_PRODUCT',
  CART_UPDATE_PRODUCT = 'CART_UPDATE_PRODUCT',
  CART_DELETE_PRODUCT = 'CART_DELETE_PRODUCT',
  CART_GET_PRODUCTS_LOADING = 'CART_GET_PRODUCTS_LOADING',
  CART_GET_PRODUCTS_SUCCESS = 'CART_GET_PRODUCTS_SUCCESS',
  CART_GET_PRODUCTS_FAILURE = 'CART_GET_PRODUCTS_FAILURE',
}

export type CartGetProductLoadingAction = {
  type: CartActionType.CART_GET_PRODUCTS_LOADING,
};

export type CartGetProductSuccessAction = {
  type: CartActionType.CART_GET_PRODUCTS_SUCCESS,
  payload: {
    products: Product[],
  }
};

export type ShopAddProductToCardAction = {
  type: CartActionType.CART_ADD_PRODUCT,
  payload: {
    product: Product,
  }
};

export type CartUpdateProductAction = {
  type: CartActionType.CART_UPDATE_PRODUCT,
  payload: {
    cartProductId: string,
  }
};

export type CartDeleteProductAction = {
  type: CartActionType.CART_DELETE_PRODUCT,
  payload: {
    cartProductId: string,
  }
};

export type CartDispatchType = ShopAddProductToCardAction | CartUpdateProductAction | CartDeleteProductAction | CartGetProductSuccessAction;
