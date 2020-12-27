import * as Auth from '../constants/AuthConstant';

export const registrationRequest = (data) => ({
    type: Auth.REGISTRATION_REQUEST,
    payload: data
});

export const loginRequest = (data) => ({
    type: Auth.LOGIN_REQUEST,
    payload: data
});

export const forgotPasswordRequest = (email) => ({
    type: Auth.FORGOT_PASSWORD_REQUEST,
    payload: email
});

export const resetPasswordRequest = (data) => ({
    type: Auth.RESET_PASSWORD_REQUEST,
    payload: data
});