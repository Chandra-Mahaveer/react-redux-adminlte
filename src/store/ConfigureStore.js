import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import reduxSaga from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const getConfigStore = () => {
    const initialState = {};
    const reduxSagaMiddleware = reduxSaga();
    const store = createStore(rootReducer, initialState, applyMiddleware(reduxSagaMiddleware));
    reduxSagaMiddleware.run(rootSaga);
    return store;
}

export default getConfigStore;