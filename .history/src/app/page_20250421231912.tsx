export default function LoginPage() {
  return (
    <div className="w-full h-screen bg-[#6DE1D2]">
        <div className="max-w-[100px] rounded-lg p-3">
          <h1>Signin</h1>
          <div>
            <label className="text-">email</label>
            <input className="rounded-lg border-gray-400" type="text" />
          </div>
          <div>
            <label className="text-">password</label>
            <input className="rounded-lg border-gray-400" type="password" />
          </div>
        </div>
    </div>
  )
}