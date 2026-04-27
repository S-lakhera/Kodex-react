import { createSlice } from '@reduxjs/toolkit'

let cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItem: []
    },
    reducers: {
        addToCart: (state, action) => {
            state.cartItem.push(action.payload)
        },
        removeItem: (state, action) => {
            state.cartItem = state.cartItem.filter((e) => e.id !== action.payload)
        },
        updateQuantity: (state, action) => {
            const { id, amount } = action.payload;
            const item = state.cartItem.find((e) => e.id === id)
            if (item) {
                item.quantity = Math.max(1, item.quantity + amount)
            }
        },
        clearCart: (state) => {
            state.cartItem = []
        },
    }
})

export let { addToCart, clearCart, removeItem, updateQuantity,isItemInCart } = cartSlice.actions;

export default cartSlice.reducer;