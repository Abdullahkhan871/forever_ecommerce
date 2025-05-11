import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Redux/features/cartSlice.js"

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    }
})