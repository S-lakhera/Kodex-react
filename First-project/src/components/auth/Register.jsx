
const Register = ({setToggle,handleBackdropClick}) => {
  return (
    <div 
    onClick={handleBackdropClick}
    className='fixed inset-0 z-50 flex items-center justify-center w-full h-full backdrop-blur-xs bg-black/60' >
      <div className='w-1/3 max-w-3xl rounded-2xl bg-[#171717] p-8 '>

      <div className='flex flex-col gap-y-6'>

        <div>
          <h1 className='text-2xl font-bold tracking-wider'>Create Account</h1>
          <p className='tetx-sm text-slate-400'>Join us Today</p>
        </div>

        <form action="" className='flex flex-col gap-y-5'>
          <div className='text-left px-3 flex flex-col gap-y-2'>
            <label htmlFor="name">Full Name</label>
            <input 
            id='name'
            type="text" 
            className='w-full bg-black/30 outline-none px-5 mx-1 py-2 rounded-lg'
            placeholder='John Doe'
            />
          </div>
          <div className='text-left px-3 flex flex-col gap-y-2'>
            <label htmlFor="email">E-mail</label>
            <input 
            id='email'
            type="email" 
            className='w-full bg-black/30 outline-none px-5 mx-1 py-2 rounded-lg'
            placeholder='john@example.com'
            />
          </div>
          <div className='text-left px-3 flex flex-col gap-y-2'>
            <label htmlFor="password">Password</label>
            <input 
            id='password'
            type="password" 
            className='w-full bg-black/30 outline-none px-5 mx-1 py-2 rounded-lg'
            placeholder='abc@123'
            />
          </div>

          <div className='p-5'>
            <button className='w-full bg-white text-black rounded-lg py-2 font-semibold text-lg'>
                Sign up
            </button>
            <p className='py-2 text-slate-400 text-md'>
                Already have an account? <span className='text-white hover:text-blue-400 cursor-pointer hover:underline underline-offset-4' onClick={() => setToggle(prev => !prev)}>Sign in</span>
            </p>
          </div>
        </form>
      </div>
      </div>
    </div>
  )
}

export default Register
