import { FETCH_USERS_FAILED, FETCH_USERS_REQUESTED, FETCH_USERS_SUCCEEDED } from "../actions/asyncActions.js";

const initialState = {
    loading: false,
    data: [],
    error: ''
}

export function asyncReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_USERS_REQUESTED:
            return {
                ...state,
                loading: false
            }
        case FETCH_USERS_SUCCEEDED:
            return {
                loading: false,
                data: [...action.payload],
                error: ''
            }
        case FETCH_USERS_FAILED:
            return {
                loading: false,
                data: [],
                error: action.payload
            }
        default:
            return state
    }
}