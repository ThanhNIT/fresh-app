import axios from "axios"
import { HISTORY_LIST_FAILED, HISTORY_LIST_SUCCESS, HISTORY_LIST_RESET, HISTORY_LIST_REQUEST } from "../constant/HistoryConstant"
import constant from '../constant/constant'
import { AsyncStorage } from "react-native"
import { useSelector } from "react-redux"
const api = constant.api
export const listHistory = (skip = 0, limit = 1, histories = []) => async (dispatch, getState) => {
    try {


        dispatch({ type: HISTORY_LIST_REQUEST, payload: histories })
        const user = await AsyncStorage.getItem('userInfo')
        const userInfo = user ? JSON.parse(user) : null
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const payload = { skip: skip, limit: limit }
        const { data } = await axios.post(`${api}/histories/`, payload, config)
        histories.push(...data.data)
        dispatch({ type: HISTORY_LIST_SUCCESS, payload: histories })

    } catch (error) {

        dispatch({ type: HISTORY_LIST_FAILED, payload: error })
    }
}

export const listHistoryWithDuration = (skip = 0, limit = 1, histories = [], from, to) => async (dispatch, getState) => {
    try {

        dispatch({ type: HISTORY_LIST_REQUEST, payload: histories })
        const user = await AsyncStorage.getItem('userInfo')
        const userInfo = user ? JSON.parse(user) : null
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }


        const payload = { skip: skip, limit: limit, start_date: from, end_date: to }
        const data = await axios.post(`${api}/histories/duration/`, payload, config)
        histories.push(...data.data.data)
        dispatch({ type: HISTORY_LIST_SUCCESS, payload: histories })

    } catch (error) {

        dispatch({ type: HISTORY_LIST_FAILED, payload: error })
    }
}


// export const productDetails = (id) => async (dispatch) => {
//     try {

//         dispatch({ type: PRODUCT_DETAILS_REQUEST })

//         const { data } = await axios.get(`/api/products/${id}`)

//         dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data })

//     } catch (error) {

//         dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message })
//     }
// }

// export const deleteProduct = (id) => async (dispatch, getState) => {

//     try {
//         dispatch({
//             type: PRODUCT_DELETE_REQUEST
//         })
//         const { userLogin: { userInfo } } = getState()
//         const config = {
//             headers: {
//                 'Content-Type': 'application/json',
//                 Authorization: `Bearer ${userInfo.token}`
//             }
//         }
//         await axios.delete(`/api/products/${id}`, config)
//         dispatch({
//             type: PRODUCT_DELETE_SUCCESS,
//         })

//     } catch (error) {
//         dispatch({ type: PRODUCT_DELETE_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message })

//     }
// }

// export const createProduct = () => async (dispatch, getState) => {

//     try {
//         dispatch({
//             type: PRODUCT_CREATE_REQUEST
//         })
//         const { userLogin: { userInfo } } = getState()
//         const config = {
//             headers: {
//                 'Content-Type': 'application/json',
//                 Authorization: `Bearer ${userInfo.token}`
//             }
//         }
//         const { data } = await axios.post(`/api/products`, {}, config)
//         dispatch({
//             type: PRODUCT_CREATE_SUCCESS,
//             payload: data
//         })

//     } catch (error) {
//         dispatch({ type: PRODUCT_CREATE_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message })

//     }
// }

// export const updateProduct = (product) => async (dispatch, getState) => {

//     try {
//         dispatch({
//             type: PRODUCT_UPDATE_REQUEST
//         })
//         const { userLogin: { userInfo } } = getState()
//         const config = {
//             headers: {
//                 'Content-Type': 'application/json',
//                 Authorization: `Bearer ${userInfo.token}`
//             }
//         }
//         const { data } = await axios.put(`/api/products/${product._id}`, product, config)
//         dispatch({
//             type: PRODUCT_UPDATE_SUCCESS,
//             payload: data
//         })

//     } catch (error) {
//         dispatch({ type: PRODUCT_UPDATE_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message })

//     }
// }

// export const createReview = (productId, review) => async (dispatch, getState) => {

//     try {
//         dispatch({
//             type: PRODUCT_CREATE_REVIEW_REQUEST
//         })
//         const { userLogin: { userInfo } } = getState()
//         const config = {
//             headers: {
//                 'Content-Type': 'application/json',
//                 Authorization: `Bearer ${userInfo.token}`
//             }
//         }
//         const { data } = await axios.post(`/api/products/${productId}/reviews`, review, config)
//         dispatch({
//             type: PRODUCT_CREATE_REVIEW_SUCCESS,
//             payload: data
//         })

//     } catch (error) {
//         dispatch({ type: PRODUCT_CREATE_REVIEW_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message })

//     }
// }

// export const getTopProducts = () => async (dispatch) => {

//     try {
//         dispatch({
//             type: PRODUCT_TOP_REQUEST
//         })
//         const { data } = await axios.get(`/api/products/top`)
//         dispatch({
//             type: PRODUCT_TOP_SUCCESS,
//             payload: data
//         })

//     } catch (error) {
//         dispatch({ type: PRODUCT_TOP_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message })

//     }
// }