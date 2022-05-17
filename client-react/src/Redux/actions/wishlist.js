import * as type from '../types.js';

export function getWishListDataRequest(  ) {
    return {
        type: type.GET_ALL_WISH_LIST_REQUEST,
    }
}

export function postWishListDataRequest( query ) {
  return {
      type: type.POST_ALL_WISH_LIST_REQUEST,
      payload: query,
  }
}

export function deleteWishListDataRequest( query ) {
  return {
      type: type.DELETE_ALL_WISH_LIST_REQUEST,
      payload: query,
  }
}

export function wishListDataSuccess( products ) {
    return {
        type: type.WISH_LIST_SUCCESS,
        payload: products,
    }
}

export function wishListDataFailed( products ) {
  return {
      type: type.WISH_LIST_FAILURE,
      payload: products,
  }
}

export function wishListReset() {
    return {
        type: type.WISH_LIST_RESET
    }
  }