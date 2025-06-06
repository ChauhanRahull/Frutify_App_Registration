import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            console.log("Adding to Cart:", action.payload); // Debugging Log

            const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.items[itemIndex].quantity += 1;
            } else {
                state.items.push({
                    ...action.payload,
                    quantity: 1,
                    price: action.payload.price || 0  // Ensure price is always set
                });
            }
            console.log("Updated Cart:", state.items); // Debugging Log
        },

        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        increaseQuantity: (state, action) => {
            const item = state.items.find(item => item.id === action.payload);
            if (item) {
                item.quantity += 1;
            }
        },
        decreaseQuantity: (state, action) => {
            const item = state.items.find(item => item.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
        },
    },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
