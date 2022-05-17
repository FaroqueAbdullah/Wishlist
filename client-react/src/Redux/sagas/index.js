import { all } from "redux-saga/effects";
import userSaga from "./userSaga";
import productSaga from "./productSaga";
import wishlistSaga from "./wishlistSaga";

export default function* rootSaga() {
  yield all([
    userSaga(),
    productSaga(),
    wishlistSaga()
  ]);
}
