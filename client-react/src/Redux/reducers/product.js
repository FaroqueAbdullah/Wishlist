import * as types from '../types.js';

const initialState = {
  products: [],
}

export default function product(state = initialState, action) {
    switch (action.type) {
      case types.GET_ALL_PRODUCTS_SUCCESS:
        return {
          ...state,
          products: action.payload
        }
      default:
        return state
    }
  }