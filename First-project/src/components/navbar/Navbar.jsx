import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    useEffect(() => {
        const controlNavbar = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 50) {
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
        <div className={`w-full flex shadow-[0_5px_15px_rgb(0,0,0,0.2)] bg-black/15 backdrop-blur-sm justify-between px-8 
        fixed ${isVisible ? 'translate-y-0' : '-translate-y-full'} `}>
            <h1 className="py-3 font-bold tracking-wider uppercase text-4xl ">Our Products</h1>
            <div className=' flex text-xl gap-4 items-center font-semibold'>
                <p className='cursor-pointer hover:underline '>Cart</p>
                <p className='cursor-pointer hover:underline '>Login/Signup</p>
            </div>
        </div>
    )
}

export default Navbar
