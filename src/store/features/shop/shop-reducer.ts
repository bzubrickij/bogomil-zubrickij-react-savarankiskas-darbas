/* eslint-disable @typescript-eslint/default-param-last */
import initialState from './shop-initial-state';
import { ShopActionType, ShopDispatchTypes, ShopState } from './shop-types';

const shopReducer = (state: ShopState = initialState, action: ShopDispatchTypes) : ShopState => {
  switch (action.type) {
    case ShopActionType.SHOP_STATUS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case ShopActionType.SHOP_STATUS_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ShopActionType.SHOP_STATUS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload.products,
      };
      // case ShopActionType.CART_ADD_PRODUCT:
    //   return {
    //     ...state,
    //     loading: false,
    //     product: action.payload.product,
    //   };
    default:
      return state;
  }
};

export default shopReducer;
