import { createSlice } from "@reduxjs/toolkit"
import { cakeActions } from "../cake/cakeSlice"

const initialState = {
    numberOfIceCreams: 20
}


const iceCreamSlice = createSlice({
    name: "iceCream",
    initialState,
    reducers: {
        ordered: (state, action) => {
            state.numberOfIceCreams = state.numberOfIceCreams - action.payload
        },
        restocked: (state, action) => {
            state.numberOfIceCreams = state.numberOfIceCreams + action.payload
        }
    },
})

export const iceCreamReducer = iceCreamSlice.reducer
export const iceCreamActions = iceCreamSlice.actions
