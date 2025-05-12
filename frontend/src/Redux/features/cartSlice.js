import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    items: []
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        getItems: (state) => { return state.items },
        addItem: (state, action) => {
            let findItem = state.items.find((item) => item._id == action.payload._id && item.sizes == action.payload.sizes)
            if (findItem) {
                state.items = state.items.map((item) => item._id == action.payload._id && item.sizes == action.payload.sizes ? { ...item, quantity: item.quantity + 1 } : item)
            }
            else {
                state.items.push(action.payload)
            }
        },
        removeItem: (state, action) => {
            state.items = state.items.filter((item) => item._id !== action.payload._id || item.sizes !== action.payload.sizes)
        },
        changeQuantityOfItem: (state, action) => {
            if (action.payload.value == 0) {
                console.log(state.items)
                state.items = state.items.filter((item) => item._id !== action.payload.item._id || item.sizes !== action.payload.item.sizes)
            }
            else {
                state.items = state.items.map((item) => item._id == action.payload.item._id && item.sizes == action.payload.item.sizes ? { ...item, quantity: action.payload.value } : item)
            }
        }
    }
})
export const { getItems, addItem, removeItem, changeQuantityOfItem } = cartSlice.actions;
export default cartSlice.reducer; 