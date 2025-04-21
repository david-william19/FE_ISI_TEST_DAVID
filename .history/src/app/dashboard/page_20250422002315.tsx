import { Header } from "@/components";
import { Card } from "./_components";
import fetchInstance from "@/lib/fetch";

export async function getPosts() {
    const response = await fetch(`/api/posts`, {
        method: "GET"
    })

    return response
}

export default async function DashboardPage() {
    const postsData = await getPosts()

    console.log(postsData)
    return (
        <div className="w-full min-h-screen bg-[#FFDBDB]">
            <Header />
            <div className="container mx-auto">
            <h1 className="text-4xl font-semibold my-5 text-center text-[#594100]">Posts</h1>
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