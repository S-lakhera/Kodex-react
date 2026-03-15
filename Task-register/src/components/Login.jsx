function Login({fn}) {
    return (
    <div className="w-5/6 sm:2/3 md:w-2/7  shadow-[0_5px_15px_rgb(0,0,0,0.5)] hover:shadow-[0_10px_15px_rgb(0,0,0,0.6)] px-3 py-10  text-center rounded-lg flex flex-col gap-4 bg-black/10 transition-shadow duration-300 text-sm" >

      <div className="" >
        <h1 className="text-2xl font-semibold">Welcome back</h1>
        <p className="text-gray-500 text-sm">Sign in to your account</p>
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
        <button className="py-2 bg-slate-900 hover:bg-slate-800/60 transition-all duration-400 rounded-xl w-full cursor-pointer active:scale-90">Sign in</button>
      </div>
      <div>
        <p className="text-sm text-gray-400">Don&apos;t have an account? <span className="text-white hover:underline cursor-pointer underline-offset-3 hover:text-blue-300 transition-all duration-300" onClick={() => fn((prev) => !prev)}>Sign up</span></p>
      </div>
    </div>
  )
}

export default Login;