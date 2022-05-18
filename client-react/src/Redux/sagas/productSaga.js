import { put, takeLatest } from 'redux-saga/effects';
import { getProductDataSuccess } from '../actions/product';
import { getProductApi } from '../../API/index';

function* getAllProducts(action) {
    try {
        const data = yield getProductApi(action.payload);
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