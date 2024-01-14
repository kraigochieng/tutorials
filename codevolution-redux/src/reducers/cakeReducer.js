import { BUY_CAKE } from "../actions/cakeActions"

const initialState = {
    numOfCakes: 10
}

export function cakeReducer(state = initialState, action) {
    switch(action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1, 
            }

        default:
            return state
    }
}