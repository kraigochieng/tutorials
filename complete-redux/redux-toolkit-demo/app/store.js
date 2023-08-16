import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";

import { cakeReducer } from "../features/cake/cakeSlice.js";
import { iceCreamReducer } from "../features/iceCream/iceCreamSlice.js";
import { userReducer } from "../features/user/userSlice.js";
const configureStore = reduxJsToolkit.configureStore
const loggerMiddleWare = createLogger()

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        iceCream: iceCreamReducer,
        user: userReducer,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleWare)
})

export default store