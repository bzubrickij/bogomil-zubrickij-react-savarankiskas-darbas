/* eslint-disable @typescript-eslint/no-unused-vars */
import { Dispatch } from 'redux';
import ShopApi from '../../../services/shop-api';
import { Product } from '../../../types/global-types';
import { AppAction, RootState } from '../../../types/redux-types/redux-types';
import * as CartTypes from './cart-types';

const cartGetProductLoadingAction: CartTypes.CartGetProductLoadingAction = {
  type: CartTypes.CartActionType.CART_GET_PRODUCTS_LOADING,
};



const createCartUpdateProductAction = (cartProductId: string): CartTypes.CartUpdateProductAction => ({
  type: CartTypes.CartActionType.CART_UPDATE_PRODUCT,
  payload: { cartProductId },
});

const createCartDeleteProductAction = (cartProductId: string): CartTypes.CartDeleteProductAction => ({
  type: CartTypes.CartActionType.CART_DELETE_PRODUCT,
  payload: { cartProductId },
});


// export const cartFetchProductsAction = async (
//   dispatch: Dispatch<AppAction>,
//   getState: () => RootState,
// ): Promise<void> => {
//   dispatch(cartGetProductLoadingAction);

//   try {
//     const cartProducts = getState().cart.products;
//     const shopProductsIds = cartProducts.map((cartProduct) => cartProduct.shopProductId);
//     const shopProducts = await ShopApi.getProductsByIds(shopProductsIds);

//     dispatch(cartGetProductsSuccessAction);
//   } catch (error) {
//     const errMsg = error instanceof Error ? error.message : String(error);
//     const authFailureAction = createCartGetProductsFailureAction(errMsg);
//     dispatch(authFailureAction);
//   }
// };
