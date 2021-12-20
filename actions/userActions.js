import axios from "axios"
import { USER_CHANGE_FAIL, USER_CHANGE_REQUEST, USER_CHANGE_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../constant/UserConstant"
import constant from '../constant/constant'
import { AsyncStorage } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { HISTORY_LIST_RESET } from "../constant/HistoryConstant";
const api = constant.api

export const login = (email, password) => async (dispatch, getState) => {

    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post(`${api}/user/login`, { email, password }, config)
        if (data && data.status) {
            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: data.data
            })
        }
        else {
            dispatch({ type: USER_LOGIN_FAIL, payload: data.data })
        }


        await AsyncStorage.setItem('userInfo', JSON.stringify(data.data))

    } catch (error) {
        console.log(error)
        dispatch({ type: USER_LOGIN_FAIL, payload: error })

    }
}

export const signup = (email, password) => async (dispatch, getState) => {

    try {

        dispatch({
            type: USER_REGISTER_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const payload = {
            "email": email,
            "password": password,
            "first_name": email.split('@')[0],
            "last_name": "",
            "is_admin": false
        }

        const { data } = await axios.post(`${api}/user/create`, payload, config)

        if (!data.success) {
            dispatch({
                type: USER_REGISTER_FAIL,
                payload: data.data
            })
        }

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({ type: USER_REGISTER_FAIL, payload: error })

    }
}

export const changePasswordAction = (oldpassword, password) => async (dispatch, getState) => {

    try {

        dispatch({
            type: USER_CHANGE_REQUEST
        })

        const { userLogin: { userInfo } } = getState()
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const payload = {
            "email": userInfo.email,
            "password": oldpassword,
            "new_password": password
        }

        console.log(payload)

        const { data } = await axios.post(`${api}/user/change-password`, payload, config)
        if (!data.status) {
            dispatch({
                type: USER_CHANGE_FAIL,
                payload: data.data
            })
        } else {
            dispatch({
                type: USER_CHANGE_SUCCESS,
                payload: data
            })
        }

    } catch (error) {
        dispatch({ type: USER_CHANGE_FAIL, payload: error })

    }
}

export const logout = () => async (dispatch) => {

    try {

        dispatch({
            type: USER_LOGOUT
        })

        dispatch({
            type: HISTORY_LIST_RESET
        })

    } catch (error) {
        dispatch({ type: USER_CHANGE_FAIL, payload: error })
    }
}