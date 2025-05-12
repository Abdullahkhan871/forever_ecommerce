import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    items: JSON.parse(localStorage.getItem("items")) || []
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
                localStorage.setItem("items", JSON.stringify(state.items))
            }
            else {
                state.items.push(action.payload)
            }
            localStorage.setItem("items", JSON.stringify(state.items))

        },
        removeItem: (state, action) => {
            state.items = state.items.filter((item) => item._id !== action.payload._id || item.sizes !== action.payload.sizes)
            localStorage.setItem("items", JSON.stringify(state.items))
        },
        changeQuantityOfItem: (state, action) => {
            if (action.payload.value == 0) {
                console.log(state.items)
                state.items = state.items.filter((item) => item._id !== action.payload.item._id || item.sizes !== action.payload.item.sizes)
            }
            else {
                state.items = state.items.map((item) => item._id == action.payload.item._id && item.sizes == action.payload.item.sizes ? { ...item, quantity: action.payload.value } : item)
            }
            localStorage.setItem("items", JSON.stringify(state.items))
        }
    }
})
export const { getItems, addItem, removeItem, changeQuantityOfItem } = cartSlice.actions;
export default cartSlice.reducer; 