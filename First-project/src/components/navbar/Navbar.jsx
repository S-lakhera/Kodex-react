import React, { useEffect, useState } from 'react'

const Navbar = ({ setIsCartOpen, setIsFormOpen }) => {
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    useEffect(() => {
        const controlNavbar = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false)
            } else {
                setIsVisible(true)
            }

            setLastScrollY(currentScrollY)
        };

        window.addEventListener('scroll', controlNavbar)

        return () => {
            window.removeEventListener('scroll', controlNavbar);
        }
    }, [lastScrollY])

    return (
        <div className={`w-full flex shadow-[0_5px_15px_rgb(0,0,0,0.2)] bg-black/10 backdrop-blur-sm justify-between px-3 sm:px-5  md:px-8 z-1
        fixed ${isVisible ? 'translate-y-0' : '-translate-y-full'} `}>
            <h1 className="py-2 font-semibold tracking-wider uppercase text-md sm:text-xl md:text-2xl  lg:text-3xl ">Our Products</h1>
            <div className=' flex text-sm  md:text-lg  gap-2 md:gap-4 items-center font-semibold underline-offset-3'>
                <p className='cursor-pointer hover:underline' onClick={() => setIsCartOpen(true)}>Cart</p>
                <p
                    onClick={() => setIsFormOpen(true)}
                    className='cursor-pointer hover:underline '>
                    Login/Signup
                </p>
            </div>
        </div>
    )
}

export default Navbar
