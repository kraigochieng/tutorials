import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    numberOfCakes: 10
}
const cakeSlice = createSlice({
    name: "cake",
    initialState,
    reducers: {
        ordered: (state, action) => {
            state.numberOfCakes = state.numberOfCakes - action.payload
        },
        restocked: (state, action) => {
            state.numberOfCakes = state.numberOfCakes + action.payload
        },
    }
});

export const cakeActions = cakeSlice.actions
export const cakeReducer = cakeSlice.reducer 



