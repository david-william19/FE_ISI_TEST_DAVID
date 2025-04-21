export default function LoginPage() {
  return (
    <div className="w-full h-screen bg-[#6DE1D2]">
        <div className="w-fitrounded-lg p-3 bg-white">
          <h1>Signin</h1>
          <div className="mb-3">
            <label className="text-gray-700">email</label>
            <input className="rounded-lg border-gray-400" type="text" />
          </div>
          <div className="mb-3">
            <label className="text-gray-700">password</label>
            <input className="rounded-lg border-gray-400" type="password" />
          </div>
        </div>
    </div>
  )
}