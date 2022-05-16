import { all } from "redux-saga/effects";
import userSaga from "./userSaga";
import productSaga from "./productSaga";

export default function* rootSaga() {
  yield all([
    userSaga(),
    productSaga()
  ]);
}
