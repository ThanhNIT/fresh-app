import { HISTORY_LIST_FAILED, HISTORY_LIST_REQUEST, HISTORY_LIST_SUCCESS, HISTORY_LIST_RESET } from "../constant/HistoryConstant"

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