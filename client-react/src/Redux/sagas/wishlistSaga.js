import { put, takeLatest } from 'redux-saga/effects';
import { wishListDataSuccess, wishListDataFailed } from '../actions/wishlist';

const apiURL = 'http://localhost:3000/wishlist';

async function getJWT() {
  const userData = await localStorage.getItem('userData');
  return JSON.parse(userData).jwt;
}

async function getApi() {
  const queryAPI = apiURL ;
  return await fetch(queryAPI, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': await getJWT()
    },
  }).then(response => response.json())
    .catch(error => console.log(error));
}

async function postApi(payload) {
  console.log('payload', payload);
  const queryAPI = apiURL;
  return await fetch(queryAPI, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': await getJWT()
    },
    body: JSON.stringify(payload)
  }).then(response => response.json())
    .catch(error => console.log(error));
}

async function deleteApi(payload) {
  const queryAPI = apiURL;
  return await fetch(queryAPI, {
    method: 'DELETE',
    headers: {'Content-Type': 'application/json' },
  }).then(response => response.json())
    .catch(error => console.log(error));
}

function* getWishlist() {
    try {
      const data = yield getApi();
      console.log(data);
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
      const data = yield postApi(action.payload);
      console.log('addWishlist ', data);
    } catch (error) {
      console.log('error');
    }
  }

function* deleteWishlist(action) {
    try {
      const data = yield deleteApi(action.payload);
      console.log(data);
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