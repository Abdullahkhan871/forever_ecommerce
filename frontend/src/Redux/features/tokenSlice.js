import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: localStorage.getItem("token") || null
}


const tokenSlice = createSlice({
    name: "token",
    initialState,
    reducers: {
        addToken: (state, action) => state.token = action.payload,
        removeToken: (state) => {
            localStorage.removeItem("token");
            state.token = "";
        }
    }
})


const { addToken } = tokenSlice.actions
export default tokenSlice.reducer