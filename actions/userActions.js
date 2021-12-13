import axios from "axios"
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "../constant/UserConstant"
import constant from '../constant/constant'
import { AsyncStorage } from "react-native";
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

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data.data
        })

        await AsyncStorage.setItem('userInfo', JSON.stringify(data.data))


    } catch (error) {
        dispatch({ type: USER_LOGIN_FAIL, payload: error })

    }


}