"use client"

import { useRouter } from "next/navigation";
import { Button } from "../ui";
import fetchInstance from "@/lib/fetch";

export function Header() {
    const router = useRouter()
    async function handleLogout() {
        const response = await fetch('/api/auth/logout')

        if(response.ok) {
            router.replace()
        }
    }
    return (
        <header className="w-full p-5 flex justify-end rounded-b-lg bg-white">
            <Button type="secondary" onClick={handleLogout}>logout</Button>
        </header>
    )
}