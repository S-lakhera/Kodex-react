
import CartItemCard from '@/components/local/CartItemCard';
import { clearCart } from '@/features/cartSlice';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Cart = () => {

  const { cartItem } = useSelector((store) => store.cart)
  const dispatch = useDispatch();
  
  if (cartItem.length > 0) {
    return (
      <div className='w-full flex justify-center flex-col items-center'>
        <div className='flex flex-col w-3/5 justify-center'>

          {
            cartItem?.map((pro) => <CartItemCard item={pro} key={pro.id} />)
          }

        </div>
        <div className='w-full flex justify-center '>
          <button
          onClick={() => dispatch(clearCart())}
          className=" px-5 w-40 bg-white text-black  py-2 text-lg rounded-lg">Clear Cart</button>
        </div>
      </div>
    )
  }
  else{
    return <div className='text-2xl text-slate-300 flex justify-center '> No Items added to the cart... </div>
  }
}

export default Cart
