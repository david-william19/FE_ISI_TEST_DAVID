"use client"

export default function LoginPage() {
  const 
  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#FFDBDB]">
        <div className="w-[400px] rounded-lg px-5 py-10 bg-white">
          <h1 className="text-gray-700 font-semibold text-center text-2xl">Signin</h1>
          <form className="text-center mt-5">
          <div className="mb-3 flex flex-col gap-2.5 text-left">
            <label className="text-gray-700">email</label>
            <input className="rounded-lg border-gray-400 p-2.5" type="text" />
          </div>
          <div className="mb-3 flex flex-col gap-2.5 text-left">
            <label className="text-gray-700">password</label>
            <input className="rounded-lg border-gray-400 p-2.5" type="password" />
          </div>

          <button className="bg-[#644A07] hover:bg-[#594100] text-[#FFC6C6] text-center w-[100px] py-2.5 px-3 rounded-md mt-5">Sign in</button>
          </form>
        </div>
    </div>
  )
}