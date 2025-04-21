import { useRouter } from "next/navigation";
import { Button } from "../ui";

export function Header() {
    const router = useRouter()
    function handleLogout() {
        localStorage.removeItem('token')
        router.replace('/')
    }
    return (
        <header className="w-full p-5 flex justify-end rounded-b-lg bg-white">
            <Button type="secondary" onClick={handleLogout}>logout</Button>
        </header>
    )
}