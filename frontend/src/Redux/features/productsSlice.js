import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProduct = createAsyncThunk("products", async () => {
    const res = await axios.get(import.meta.env.VITE_GET_PRODUCT_URL)
    console.log("1", res);
    return res.data.message
})


const productsSlice = createSlice({
    name: "products",
    initialState: {
        isLoading: false,
        products: [],
        isError: false
    },
    extraReducers: (builder) => {
        builder.addCase(getProduct.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(getProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.products = action.payload
        })
        builder.addCase(getProduct.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true
            state.products = action.payload
        })
    }
})

export default productsSlice.reducer