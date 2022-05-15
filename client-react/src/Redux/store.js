import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/index.js';
import createSagaMiddleware  from 'redux-saga';
import rootSaga from './sagas/index.js';

const sagaMiddleware = createSagaMiddleware();
const store = compose(
  applyMiddleware(sagaMiddleware),
)(createStore)(rootReducer);

sagaMiddleware.run(rootSaga);

export default store;