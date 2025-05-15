import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Redux/features/cartSlice.js"
import tokenReducer from "../Redux/features/tokenSlice.js"
import orderReducer from "../Redux/features/orderSlice.js"


export const store = configureStore({
    reducer: {
        cart: cartReducer,
        token: tokenReducer,
        myOrder: orderReducer,
    }
})