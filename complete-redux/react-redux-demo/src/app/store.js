import { createLogger } from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import { cakeReducer } from "../features/cake/cakeSlice.js";
import { iceCreamReducer } from "../features/iceCream/iceCreamSlice.js";
import { userReducer } from "../features/user/userSlice.js";
import { tokenReducer } from "../features/token/tokenSlice.js";
import { persistStore } from "redux-persist";

const loggerMiddleWare = createLogger()

export const store = configureStore({
    reducer: {
        cake: cakeReducer,
        iceCream: iceCreamReducer,
        user: userReducer,
        token: tokenReducer
    },
    
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleWare)
})

export const persistor = persistStore(store)