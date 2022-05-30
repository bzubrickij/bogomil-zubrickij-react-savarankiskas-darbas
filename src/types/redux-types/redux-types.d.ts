import { ThunkDispatch } from 'redux-thunk';
import { AuthDispatchType, AuthState } from '../../store/features/authentication/auth-types';
import { CartDispatchType, CartState } from '../../store/features/cart/cart-types';
import { NavigationDispatchType, NavigationState } from '../../store/features/navigation/navigation-types';
import { ShopDispatchTypes, ShopState } from '../../store/features/shop/shop-types';

export type RootState = {
  auth: AuthState,
  cart: CartState,
  navigation: NavigationState,
  shop: ShopState,
};

export type AppAction = AuthDispatchType | CartDispatchType | NavigationDispatchType | ShopDispatchTypes;

export type AppDispatch = ThunkDispatch<RootState, undefined, AppAction>;
