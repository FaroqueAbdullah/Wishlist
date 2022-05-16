import { put, takeLatest } from 'redux-saga/effects';
import { getProductDataSuccess } from '../actions/product';

const apiURL = 'http://localhost:3000/product'; 

async function getApi(payload) {
  return await fetch(apiURL, {
    method: 'GET',
    headers: {'Content-Type': 'application/json' },
  }).then(response => response.json())
    .catch(error => console.log(error));
}

function* getAllProducts(action) {
    try {
        const data = yield getApi(action.payload);
        if ( data.status === 'success' ) {
            yield put(getProductDataSuccess(data.data));
        }
      } catch (error) {
        console.log('error');
      }
  }

function* productSaga() {
    yield takeLatest('GET_ALL_PRODUCTS_REQUEST', getAllProducts);
  }
  
  export default productSaga;