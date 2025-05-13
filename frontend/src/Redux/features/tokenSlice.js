import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: localStorage.getItem("token") || null
}


const tokenSlice = createSlice({
    name: "token",
    initialState,
    reducers: {
        addToken: (state, action) => {
            localStorage.setItem("token", action.payload)
            state.token = action.payload
        },
        removeToken: (state) => {
            localStorage.removeItem("token");
            state.token = "";
        }
    }
})


export const { addToken, removeToken } = tokenSlice.actions
export default tokenSlice.reducer