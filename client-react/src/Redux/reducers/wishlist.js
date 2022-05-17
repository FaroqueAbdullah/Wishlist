import * as types from '../types.js';

const initialState = {
  wishList: [],
  error: false,
  message: null,
}

export default function wishlist(state = initialState, action) {
    switch (action.type) {
      case types.WISH_LIST_SUCCESS:
        console.log('WISH_LIST_SUCCESS', action.payload);
        return {
          ...state,
          wishList: action.payload.data.products,
          error: false,
          message: action.payload.message,
        }
      case types.WISH_LIST_FAILURE:
        return {
          ...state,
          error: true,
          message: action.payload.message,
        }
      default:
        return state
    }
  }