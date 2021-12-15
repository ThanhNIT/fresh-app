import { USER_CHANGE_FAIL, USER_CHANGE_REQUEST, USER_CHANGE_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../constant/UserConstant"

export const userLoginReducer = (state = {}, action) => {

    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return {
                loading: true
            }
        case USER_LOGIN_SUCCESS:
            return {
                loading: false,
                userInfo: action.payload
            }
        case USER_LOGIN_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case USER_LOGOUT:
            return {
            }

        default: return state
    }

}

export const userRegisterReducer = (state = {}, action) => {

    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return {
                success: false
            }
        case USER_REGISTER_SUCCESS:
            return {
                success: true,
                userInfo: action.payload
            }
        case USER_REGISTER_FAIL:
            return {
                success: false,
                error: action.payload
            }

        default: return state
    }

}

export const userChangePasswordReducer = (state = { success: false }, action) => {

    switch (action.type) {
        case USER_CHANGE_REQUEST:
            return {
                success: false
            }
        case USER_CHANGE_SUCCESS:
            return {
                success: true,
                userInfo: action.payload
            }
        case USER_CHANGE_FAIL:
            return {
                success: false,
                error: action.payload
            }
        default: return state
    }
}

