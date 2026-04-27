import Navbar from '@/components/local/Navbar'
import About from '@/pages/About'
import Cart from '@/pages/Cart'
import Home from '@/pages/Home'
import Product from '@/pages/Product'
import React from 'react'
import { Route, Routes } from 'react-router'

const AppRoutes = () => {
    return (
        <>
            <Navbar/>
            <div className='px-10 py-5 '>
                <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/products' element={<Product />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
            </div>
        </>
    )
}

export default AppRoutes
