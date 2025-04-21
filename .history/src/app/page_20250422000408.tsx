"use client"

import { Button } from "@/components/ui"
import { ChangeEvent, useState } from "react"

export default function LoginPage() {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const handle

  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#FFDBDB]">
        <div className="w-[400px] rounded-lg px-5 py-10 bg-white">
          <h1 className="text-gray-700 font-semibold text-center text-2xl">Signin</h1>
          <form className="text-center mt-5">
          <div className="mb-3 flex flex-col gap-2.5 text-left">
            <label className="text-gray-700">email</label>
            <input className="text-gray-800 rounded-lg border border-gray-400 p-2.5" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} type="text" />
          </div>
          <div className="mb-3 flex flex-col gap-2.5 text-left">
            <label className="text-gray-700">password</label>
            <input className="text-gray-800 rounded-lg border border-gray-400 p-2.5" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} type="password" />
          </div>

          <Button type="primary" className="w-[100px] mt-5">Sign in</Button>
          </form>
        </div>
    </div>
  )
}