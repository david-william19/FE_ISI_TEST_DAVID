export default function LoginPage() {
  return (
    <div className="w-full h-screen bg-[#6DE1D2]">
        <div className="max-w-[100px] rounded-lg p-3">
          <h1>Signin</h1>
          <div>
          <label>email</label>
          <input type="text" />
          </div>
          <div>
            <label>password</label>
            <input type="password" />
          </div>
        </div>
    </div>
  )
}