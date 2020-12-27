import * as Auth from '../constants/AuthConstant';

const initialState = {
    loading: false,
    user: {},
    message: '',
    error: ''
};

const crudReducer = (state = initialState, action) => {
    switch(action.type) {
        case Crud.REGISTRATION_REQUEST: 
        case Crud.LOGIN_REQUEST:
        case Crud.FORGOT_PASSWORD_REQUEST: 
        case Crud.RESET_PASSWORD_REQUEST:
            return {
                ...state,
                loading: true
            }
        case Crud.FORGOT_PASSWORD_SUCCESS:
        case Crud.RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: false,
                message: action.payload.message,
                error: ''
            }
        case Crud.REGISTRATION_FAILED: 
        case Crud.LOGIN_FAILED:
        case Crud.FORGOT_PASSWORD_FAILED:
        case Crud.RESET_PASSWORD_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                message: ''
            }
        case Crud.REGISTRATION_SUCCESS:
        case Crud.LOGIN_SUCCESS:
          return {
            ...state,
            loading: false,
            message: action.payload.message,
            error: '',
            user: action.payload.user
          }
        default: 
            return state;
    }
}

export default authReducer;