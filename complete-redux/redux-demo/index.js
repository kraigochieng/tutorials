import {createStore, bindActionCreators, combineReducers, applyMiddleware, compose} from "redux"
import reduxLogger from "redux-logger"
import reduxThunk from "redux-thunk"
// Reducers
import { cakeReducer } from "./reducers/cakeReducer.js"
import { iceCreamReducer } from "./reducers/iceCreamReducer.js"
import { asyncReducer } from "./reducers/asyncReducer.js"
// Action Makers
import { orderCake, restockCake } from "./actions/cakeActions.js"
import { orderIceCream, restockIceCream } from "./actions/iceCreamActions.js"
import { fetchUsersFail, fetchUsersRequest, fetchUsersSuccess } from "./actions/asyncActions.js"
import axios from "axios"

// Keep track of reducers
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    async: asyncReducer
})

// Middleware
const loggerMiddleWare = reduxLogger.createLogger()
const thunkMiddleWare = reduxThunk.default
// Create store
const store = createStore(rootReducer, compose(applyMiddleware(loggerMiddleWare, thunkMiddleWare)))

function fetchUsers() {
    return function(dispatch) {
        dispatch(fetchUsersRequest())
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => dispatch(fetchUsersSuccess(response.data.map(user => user.id))))
            .catch(error => dispatch(fetchUsersFail(error.message)))
    }
}
// Dispatch actions
const actions = bindActionCreators({orderCake, restockCake, orderIceCream, restockIceCream, fetchUsers}, store.dispatch)
// store.dispatch(orderCake(1))
// store.dispatch(orderCake(2))  
// store.dispatch(orderCake(1))  
// store.dispatch(orderCake(1))
// store.dispatch(orderCake(1))
// store.dispatch(restockCake(5))
// store.dispatch(restockCake(3))
actions.orderCake(1)
actions.orderCake()
actions.orderCake()
actions.restockCake()

actions.orderIceCream()
actions.restockIceCream(5)
actions.fetchUsers()