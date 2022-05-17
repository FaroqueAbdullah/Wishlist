import { combineReducers } from "redux";

import user from './user';
import product from './product';
import wishlist from './wishlist';

const rootReducer = combineReducers({
  user,
  product,
  wishlist
});

export default rootReducer;