import * as types from '../types.js';

const initialState = {
  wishList: [],
  error: false,
  message: null,
}

export default function wishlist(state = initialState, action) {
    switch (action.type) {
      case types.WISH_LIST_SUCCESS:
        return {
          ...state,
          wishList: action.payload.data,
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