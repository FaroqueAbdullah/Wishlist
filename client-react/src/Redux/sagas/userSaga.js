import { call, put, takeLatest } from 'redux-saga/effects';
import { logInUserSuccss, logInUserFailed } from '../actions/user';

const apiURL = 'http://localhost:3000/auth/login'; 

async function postApi(payload) {
  return await fetch(apiURL, {
    method: 'POST',
    headers: {'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  }).then(response => response.json())
    .catch(error => console.log(error));
}

function* logInUser(action) {
  try {
    const data = yield postApi(action.payload);
    console.log(data.status);
    data.status === 'success' ? yield put(logInUserSuccss(data)) : yield put(logInUserFailed(data));
  } catch (error) {
    console.log('error');
  }
}

function* userSaga() {
  yield takeLatest('LOG_IN_USER_REQUEST', logInUser);
}

export default userSaga;