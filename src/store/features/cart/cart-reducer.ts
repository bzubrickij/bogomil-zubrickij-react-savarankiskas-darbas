/* eslint-disable @typescript-eslint/default-param-last */
import { Reducer } from 'redux';
import initialState from './cart-initial-state';
import { CartActionType, CartDispatchType, CartState } from './cart-types';

const cartReducer: Reducer<CartState, CartDispatchType> = (state = initialState, action) => {
  switch (action.type) {
    // case CartActionType.CART_ADD_PRODUCT: {
    //   product: state.products.push(action.payload);
    //   return {
    //     ...state,

    //   };
    // }

    case CartActionType.CART_UPDATE_PRODUCT: {
      return {
        ...state,
        products: state.products.map((product) => (
          product.id === action.payload.cartProductId
            ? { ...product, amount: action.payload }
            : product
        )),
      };
    }

    case CartActionType.CART_DELETE_PRODUCT: {
      return {
        ...state,
        products: state.products.filter((product) => product.id !== action.payload.cartProductId),
      };
    }

    default: return state;
  }
};

export default cartReducer;
