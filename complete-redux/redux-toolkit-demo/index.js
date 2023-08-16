import store from "./app/store.js";
import { cakeActions } from "./features/cake/cakeSlice.js";
import { iceCreamActions } from "./features/iceCream/iceCreamSlice.js";
import { fetchUsers } from "./features/user/userSlice.js";
console.log("Initial State: ",store.getState())
// const unsubcribe = store.subscribe(() => console.log("Updated State: ", store.getState()))

store.dispatch(cakeActions.ordered(1))
store.dispatch(cakeActions.ordered(1))
store.dispatch(cakeActions.restocked(3))
store.dispatch(iceCreamActions.ordered(4))
store.dispatch(iceCreamActions.restocked(11))
store.dispatch(fetchUsers())

// unsubcribe()