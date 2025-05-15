import { createSlice } from "@reduxjs/toolkit";


const orderSlice = createSlice({
    name: "order",
    initialState: {
        orders: JSON.parse(localStorage.getItem("order")) || [],
    },
    reducers: {
        addOrders: (state, action) => {
            const item = action.payload.map(i => {
                const dateObj = new Date();
                const formattedDate = `${dateObj.getDate()}, ${dateObj.toLocaleString('default', { month: 'long' })}, ${dateObj.getFullYear()}`;

                return {
                    ...i,
                    status: "Shipped",
                    date: formattedDate
                };
            });

            localStorage.setItem("order", JSON.stringify(item));
            state.orders.push(...item);
        },
    }
})


export const { addOrders } = orderSlice.actions
export default orderSlice.reducer;