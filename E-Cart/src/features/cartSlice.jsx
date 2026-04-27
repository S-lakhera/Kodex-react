import {createSlice} from '@reduxjs/toolkit'

let cartSlice = createSlice({
    name:"cart",
    initialState:{
        cartItem:[]
    },
    reducers:{
        addToCart:(state, action) => {
            state.cartItem.push(action.payload)
            alert("Item added to cart successfully...")
        },
        // removeFromCart: () => {},
        clearCart: (state) => {
            state.cartItem = []
        },
    }
})

export let {addToCart,clearCart} = cartSlice.actions;

export default cartSlice.reducer;