import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div className='flex px-5 py-3 justify-between border-b border-slate-400'>
      <div className='text-4xl'>Logo</div>
      <nav className='flex gap-10 items-center'>
        <Link to="/" >Home</Link>
        <Link to="/about" >About</Link>
        <Link to="/products" >Products</Link>
      </nav>
      <div className='flex gap-10 items-center'>
        <Link to="/cart" >Cart</Link>
        Login
      </div>
    </div>
  )
}

export default Navbar
