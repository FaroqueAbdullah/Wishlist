import { put, takeLatest } from 'redux-saga/effects';
import { logInUserSuccss, logInUserFailed, logOutUserSuccss } from '../actions/user';

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
    data.status === 'success' ? yield localStorage.setItem('userData', JSON.stringify(data)) : yield localStorage.removeItem('userData');
    data.status === 'success' ? yield put(logInUserSuccss(data)) : yield put(logInUserFailed(data));
  } catch (error) {
    console.log('error');
  }
}

function* loadUserFromLocal() {
  const userData = yield localStorage.getItem('userData');
  if (userData) {
    yield put(logInUserSuccss(JSON.parse(userData)));
  }
}

function* logOutUser() {
  yield localStorage.removeItem('userData');
  yield put(logOutUserSuccss());
}

function* userSaga() {
  yield takeLatest('LOG_IN_USER_REQUEST', logInUser);
  yield takeLatest('LOAD_STATE_FROM_LOCAL', loadUserFromLocal);
  yield takeLatest('LOG_OUT_USER_REQUEST', logOutUser);
}

export default userSaga;