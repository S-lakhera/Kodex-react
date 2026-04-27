import { CardImage } from '@/components/local/cardImage';
import { SkeletonCard } from '@/components/local/SkeletonCard';
import { clearCart } from '@/features/cartSlice';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Cart = () => {

  const { cartItem } = useSelector((store) => store.cart)
  const dispatch = useDispatch();
  // console.log(cart);

  if (cartItem.length > 0) {
    return (
      <>
        <div className='grid grid-cols-3 gap-10 '>

          {
            cartItem?.map((pro) => <CardImage product={pro} key={pro.id} />)
          }

        </div>
        <div className='w-full flex justify-center '>
          <button
          onClick={() => dispatch(clearCart())}
          className=" px-5 w-40 bg-white text-black  py-2 text-lg rounded-lg">Clear Cart</button>
        </div>
      </>
    )
  }
  else{
    return <div className='text-2xl text-slate-300 flex justify-center '> No Items added to the cart... </div>
  }
}

export default Cart
