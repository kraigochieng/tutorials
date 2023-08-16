import { createSlice } from "@reduxjs/toolkit";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"

const initialState = {
    tokenValue: ""
} 

const tokenSlice = createSlice({
    name: "token",
    initialState,
    reducers: {
        created: (state, action) => {
            state.tokenValue = action.payload
        }
    }
})

const persistConfig = {
    key: "token",
    storage
}

export const tokenActions = tokenSlice.actions
export const tokenReducer = persistReducer(tokenSlice.reducer, persistConfig)