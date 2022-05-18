import { put, takeLatest } from 'redux-saga/effects';
import { getWishListDataRequest, wishListDataSuccess, wishListDataFailed } from '../actions/wishlist';
import { getWishlistApi, postWishlistApi, deleteWishlistApi } from '../../API/index';

function* getWishlist() {
    try {
      const data = yield getWishlistApi();
      if ( data.status === 'success' ) {
        yield put(wishListDataSuccess(data))
      } else {
        yield put(wishListDataFailed(data))
      }
    } catch (error) {
      console.log('error');
    }
  }

function* addWishlist(action) {
    try {
      const data = yield postWishlistApi(action.payload);
      if ( data.status === 'success' ) {
        yield put(getWishListDataRequest())
      } 
    } catch (error) {
      console.log('error');
    }
  }

function* deleteWishlist(action) {
    try {
      const data = yield deleteWishlistApi(action.payload);
      if ( data.status === 'success' ) {
        yield put(getWishListDataRequest())
      }
    } catch (error) {
      console.log('error');
    }
  }

function* wishlistSaga() {
    yield takeLatest('GET_ALL_WISH_LIST_REQUEST', getWishlist);
    yield takeLatest('POST_ALL_WISH_LIST_REQUEST', addWishlist);
    yield takeLatest('DELETE_ALL_WISH_LIST_REQUEST', deleteWishlist);
  }
  
  export default wishlistSaga;