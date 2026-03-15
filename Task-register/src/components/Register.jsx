

const Register = ({fn}) => {
  
  return (
    <div className="w-6/7 sm:w-2/3 md:w-3/7 lg:w-2/7  shadow-[0_5px_15px_rgb(0,0,0,0.1)] hover:shadow-[0_10px_15px_rgb(0,0,0,0.2)] px-3 py-5  text-center rounded-lg flex flex-col gap-4 bg-black/10" >

      <div className="" >
        <h1 className="text-2xl font-semibold">Create Account</h1>
        <p className="text-gray-500">Join us today</p>
      </div>

      <div className="flex flex-col text-left px-2 gap-2">
        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" placeholder="John Doe" className="bg-black/30 outline-none p-2 rounded-lg mx-1" />
      </div>

      <div className="flex flex-col text-left px-2 gap-2">
        <label htmlFor="email">Email</label>
        <input type="text" id="email" placeholder="you@example.com" className="bg-black/30 outline-none p-2 rounded-lg mx-1" />
      </div>

      <div className="flex flex-col text-left px-2 gap-2">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder=" .........." className="bg-black/30 outline-none p-2 rounded-lg mx-1" />
      </div>
      <div className=" px-2 mt-3">
        <button className="py-2 bg-slate-900 hover:bg-slate-800 transition-colors duration-300 rounded-xl w-full cursor-pointer">Sign up</button>
      </div>
      <div>
        <p>Already have an account? <span className="underline cursor-pointer underline-offset-3 hover:text-blue-300 " onClick={() => fn((prev) => !prev)}>Sign in</span></p>
      </div>
    </div>
  )
}

export default Register
