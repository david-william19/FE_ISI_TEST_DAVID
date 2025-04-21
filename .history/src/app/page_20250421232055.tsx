export default function LoginPage() {
  return (
    <div className="w-full h-screen bg-[#6DE1D2]">
        <div className="w-[250px] rounded-lg p-3 bg-white">
          <h1 className="text-gray-700 font-semibold text-center text-2xl">Signin</h1>
          <div className="mb-3 flex flex-col gap-2.5">
            <label className="text-gray-700">email</label>
            <input className="rounded-lg border-gray-400" type="text" />
          </div>
          <div className="mb-3 flex flex-col gap-2.5">
            <label className="text-gray-700">password</label>
            <input className="rounded-lg border-gray-400" type="password" />
          </div>
        </div>
    </div>
  )
}