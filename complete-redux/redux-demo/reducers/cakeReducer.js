import { CAKE_ORDERED, CAKE_RESTOCKED } from "../actions/cakeActions.js"

const initialState = {
    numberOfCakes: 10
}

export function cakeReducer(state = initialState, action) {
    switch(action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes - action.payload
            }
            case CAKE_RESTOCKED:
                return {
                    ...state,
                    numberOfCakes: state.numberOfCakes + action.payload
                }
        default:
            return state
    }
}