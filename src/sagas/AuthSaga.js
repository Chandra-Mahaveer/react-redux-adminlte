import { put, takeEvery, takeLatest, all, delay, actionChannel } from 'redux-saga/effects';
import * as Auth from '../constants/AuthConstant';
import * as Config from '../constants/ConfigConstant';
import axios from 'axios';

function* registrationRequest(data) {
    try {
        const response = yield axios.post(`${Config.API_URL}registration`, data.payload);
        if (response.status == 201) {
            yield put({ type: Auth.REGISTRATION_SUCCESS, payload: { message: response.data.message, user: response.data.user } });
        } else {
            throw response;
        }
    }
    catch (error) {
        yield put({ type: Auth.REGISTRATION_FAILED, payload: error.data.message });
    }
}

function* loginRequest(data) {
    try {
        const response = yield axios.post(`${Config.API_URL}login`, data.payload);
        if (response.status == 200) {
            yield put({ type: Auth.LOGIN_SUCCESS, payload: { message: response.data.message, user: response.data.user } });
        } else {
            throw response;
        }
    }
    catch (error) {
        yield put({ type: Auth.LOGIN_FAILED, payload: error.data.message });
    }
}

function* forgotPasswordRequest(data) {
    try {
        const response = yield axios.get(`${Config.API_URL}forgot-password/${data.payload}`);
        if (response.status == 200) {
            yield put({ type: Auth.FORGOT_PASSWORD_SUCCESS, payload: response.data.message });
        } else {
            throw response;
        }
    }
    catch (error) {
        yield put({ type: Auth.FORGOT_PASSWORD_FAILED, payload: error.data.message });
    }
}

function* resetPasswordRequest(data) {
    try {
        const response = yield axios.post(`${Config.API_URL}reset-password`, data.payload);
        if (response.status == 200) {
            yield put({ type: Auth.RESET_PASSWORD_SUCCESS, payload: response.data.message });
        } else {
            throw response;
        }
    }
    catch (error) {
        yield put({ type: Auth.RESET_PASSWORD_FAILED, payload: error.data.message });
    }
}

export function* watchAuthOperationAll() {
    yield all([
        takeLatest(Auth.REGISTRATION_REQUEST, registrationRequest),
        takeLatest(Auth.LOGIN_REQUEST, loginRequest),
        takeLatest(Auth.FORGOT_PASSWORD_REQUEST, forgotPasswordRequest),
        takeLatest(Auth.RESET_PASSWORD_REQUEST, resetPasswordRequest)
    ]);
}