import { Button } from "../ui";

export function Header() {
    function handleLogout() {

    }
    return (
        <header className="w-full p-5 flex justify-end rounded-b-lg bg-white">
            <Button type="secondary" onClick={handleLogout}>logout</Button>
        </header>
    )
}