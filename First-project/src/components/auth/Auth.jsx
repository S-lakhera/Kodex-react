import React, { useState } from 'react'
import { unstable_Activity as Activity } from 'react';
import Register from './Register'
import Login from './Login'

const Auth = ({ setIsFormOpen }) => {
  const [toggle, setToggle] = useState(true)
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsFormOpen(false)
    }
  }
  return (
    <>
      <div className={toggle ? "visible" : "hidden"}>
        <Login
          handleBackdropClick={handleBackdropClick}
          setToggle={setToggle}
        />
      </div>

      <div className={!toggle ? "visible" : "hidden"}>
        <Register
          handleBackdropClick={handleBackdropClick}
          setToggle={setToggle}
        />
      </div>
    </>
  )
}

export default Auth
