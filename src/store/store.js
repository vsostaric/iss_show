import reducer, {reducerPreloadedState} from "./reducer";
import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga'
import {watchAIssSaga} from './sagas/iss.saga'
import {watchMeteorDataSaga} from "./sagas/meteor.saga";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducer, reducerPreloadedState, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchAIssSaga);
sagaMiddleware.run(watchMeteorDataSaga);
