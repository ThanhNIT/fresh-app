import { HISTORY_LIST_FAILED, HISTORY_LIST_REQUEST, HISTORY_LIST_SUCCESS, HISTORY_LIST_RESET, HISTORY_RATING_REQUEST, HISTORY_RATING_FAILED, HISTORY_RATING_SUCCESS, HISTORY_RATING_RESET } from "../constant/HistoryConstant"

export const historyListReducer = (state = { histories: [], loading: false }, action) => {

    switch (action.type) {
        case HISTORY_LIST_REQUEST:
            return {
                loading: true,
                histories: action.payload
            }
        case HISTORY_LIST_SUCCESS:
            return {
                loading: false,
                histories: action.payload
            }
        case HISTORY_LIST_RESET:
            return {
                loading: false,
                histories: []
            }
        case HISTORY_LIST_FAILED:
            return {
                loading: false,
                error: action.payload
            }

        default: return state
    }
}

export const historyRating = (state = { success: false }, action) => {

    switch (action.type) {
        case HISTORY_RATING_REQUEST:
            return {
                success: false,
            }
        case HISTORY_RATING_SUCCESS:
            return {
                success: true,
            }
        case HISTORY_RATING_RESET:
            return {
                success: false,
            }
        case HISTORY_RATING_FAILED:
            return {
                success: false,
                error: action.payload
            }

        default: return state
    }
}