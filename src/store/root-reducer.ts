import { combineReducers } from 'redux';
import authReducer from './features/authentication/auth-reducer';
import cartReducer from './features/cart/cart-reducer';
import navigationReducer from './features/navigation/navigation-reducer';
import shopReducer from './features/shop/shop-reducer';

const rootReducer = combineReducers({
  shop: shopReducer,
  cart: cartReducer,
  auth: authReducer,
  navigation: navigationReducer,
});

export default rootReducer;
