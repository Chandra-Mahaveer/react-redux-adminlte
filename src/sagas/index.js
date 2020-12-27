import { put, takeEvery, takeLatest, all, delay } from 'redux-saga/effects';
import { watchAuthOperationAll } from './AuthService';

export default function* rootSaga() {
    yield all([
        watchAuthOperationAll()
    ])
}