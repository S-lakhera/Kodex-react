import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div className='flex p-5 justify-between'>
      <div className='text-4xl'>Logo</div>
      <nav className='flex gap-10'>
        <Link to="/" >Home</Link>
        <Link to="/about" >About</Link>
        <Link to="/products" >Products</Link>
      </nav>
      <div className='flex gap-10'>
        <Link to="/cart" >Cart</Link>
        Login
      </div>
    </div>
  )
}

export default Navbar
