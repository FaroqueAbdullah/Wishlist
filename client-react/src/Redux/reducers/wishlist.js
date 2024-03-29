import * as types from '../types.js';

const initialState = {
  wishList: [],
  wishlistCount: 0,
  error: false,
  message: null,
  showAuthenticateModal: false,
}

export default function wishlist(state = initialState, action) {
    switch (action.type) {
      case types.WISH_LIST_SUCCESS:
        return {
          ...state,
          wishList: action.payload.data.products,
          wishlistCount: action.payload.data.products ? action.payload.data.products.length : 0,
          error: false,
          message: action.payload.message,
        }
      case types.WISH_LIST_FAILURE:
        return {
          ...state,
          error: true,
          wishlistCount: 0,
          message: action.payload.message,
        }
      case types.WISH_LIST_RESET:
        return {
          wishList: [],
          wishlistCount: 0,
          error: false,
          message: null,
        }
      case types.WISH_LIST_RESET_AUTHENTICATE_MODAL_SHOW:
        return {
          ...state,
          showAuthenticateModal: true,
        }
      case types.WISH_LIST_RESET_AUTHENTICATE_MODAL_HIDE:
        return {
          ...state,
          showAuthenticateModal: false,
        }
      default:
        return state
    }
  }