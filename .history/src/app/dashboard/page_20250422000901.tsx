import { Header } from "@/components";
import { Card } from "./_components";

export default function DashboardPage() {
    return (
        <div className="w-full min-h-screen bg-[#FFDBDB]">
            <Header />
            <div className="grid grid-cols-3 container mx-auto">
                <h1 className="text-lg text-[#594100]"></h1>
                <Card>
                    <Card.title>this is title</Card.title>
                    <Card.content>this is will be the content</Card.content>
                </Card>
            </div>
        </div>
    )
}