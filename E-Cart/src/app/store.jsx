import { configureStore } from "@reduxjs/toolkit"
import cartReducer from '@/features/cartSlice'

const savedCart = localStorage.getItem('cartItems')

const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
    preloadedState: {
        cart: {
            cartItem: savedCart ? JSON.parse(savedCart) : []
        } 
    },

})

store.subscribe(() => {
    const state = store.getState()
    localStorage.setItem("cartItems", JSON.stringify(state.cart.cartItem))
})

export default store