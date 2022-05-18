import { put, takeLatest } from 'redux-saga/effects';
import { 
  logInUserSuccss, 
  logInUserFailed, 
  logOutUserSuccss, 
} from '../actions/user';

import { getWishListDataRequest, wishListReset } from '../actions/wishlist';
import { logInApi, signUpApi } from '../../API/index';


function* logInUser(action) {
  try {
    const data = yield logInApi(action.payload);
    if ( data.status === 'success' ) {
      yield localStorage.setItem('userData', JSON.stringify(data))
      yield put(logInUserSuccss(data))
      yield put(getWishListDataRequest(data))
    } else {
      yield localStorage.removeItem('userData')
      yield put(logInUserFailed(data))
    }
  } catch (error) {
    console.log('error');
  }
}

function* signUpUser(action) {
  try {
    const data = yield signUpApi(action.payload);
    if ( data.status === 'success' ) {
      yield localStorage.setItem('userData', JSON.stringify(data))
      yield put(logInUserSuccss(data))
      yield put(getWishListDataRequest(data))
    } else {
      yield localStorage.removeItem('userData')
      yield put(logInUserFailed(data))
    }
  } catch (error) {
    console.log('error');
  }
}

function* loadUserFromLocal() {
  const userData = yield localStorage.getItem('userData');
  if (userData) {
    yield put(logInUserSuccss(JSON.parse(userData)));
    yield put(getWishListDataRequest())
  }
}

function* logOutUser() {
  yield localStorage.removeItem('userData');
  yield put(logOutUserSuccss());
  yield put(wishListReset());
}

function* userSaga() {
  yield takeLatest('LOG_IN_USER_REQUEST', logInUser);
  yield takeLatest('LOAD_STATE_FROM_LOCAL', loadUserFromLocal);
  yield takeLatest('LOG_OUT_USER_REQUEST', logOutUser);
  yield takeLatest('SIGN_UP_USER_REQUEST', signUpUser);
}

export default userSaga;