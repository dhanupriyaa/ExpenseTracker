import React from 'react'

const Login = () => {
  return (
    <AuthLayout>
      <div className="lg:w-[70%] h-3/4 md:h-full flex-col justify-center">
        <h3 classname="text-xl font-semibold text-black">Welcom Back</h3>
        <p classname="text-xs text-slate-700 mt-[5px] mb-6">Please enter your details to log in</p>


      </div>
    </AuthLayout>
  )
}

export default Login