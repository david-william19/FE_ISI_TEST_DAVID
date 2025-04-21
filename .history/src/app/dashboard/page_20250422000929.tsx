import { Header } from "@/components";
import { Card } from "./_components";

export default function DashboardPage() {
    return (
        <div className="w-full min-h-screen bg-[#FFDBDB]">
            <Header />
            <h1 className="text-lg my-5 text-[#594100]">Posts</h1>
            <div className="grid grid-cols-3 mx-auto">
                <Card>
                    <Card.title>this is title</Card.title>
                    <Card.content>this is will be the content</Card.content>
                </Card>
            </div>
        </div>
    )
}