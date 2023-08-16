import { ICECREAM_ORDERED, ICECREAM_RESTOCKED } from "../actions/iceCreamActions.js"

const initialState = {
    numberOfIceCreams: 20
}


export function iceCreamReducer(state = initialState, action) {
    switch(action.type) {
        case ICECREAM_ORDERED:
            return {
                ...state,
                numberOfIceCreams: state.numberOfIceCreams - action.payload
            }
        case ICECREAM_RESTOCKED:
            return {
                ...state,
                numberOfIceCreams: state.numberOfIceCreams + action.payload
            }
        default:
            return state
    }
}