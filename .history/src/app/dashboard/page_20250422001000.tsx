import { Header } from "@/components";
import { Card } from "./_components";

export default function DashboardPage() {
    return (
        <div className="w-full min-h-screen bg-[#FFDBDB]">
            <Header />
            <div className="container mx-auto">
            <h1 className="text-4xl  my-5 text-center text-[#594100]">Posts</h1>
            <div className="grid grid-cols-3">
                <Card>
                    <Card.title>this is title</Card.title>
                    <Card.content>this is will be the content</Card.content>
                </Card>
            </div>
            </div>
        </div>
    )
}