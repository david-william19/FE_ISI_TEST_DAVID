import { Header } from "@/components";
import { Card, ProgressLabel } from "./_components";
import prisma from "@/lib/prisma";

export default async function DashboardPage() {
  const posts = await prisma.post.findMany();

  console.log(posts);
  return (
    <div className="w-full min-h-screen bg-[#FFDBDB]">
      <Header />
      <div className="container mx-auto">
        <h1 className="text-4xl font-semibold my-5 text-center text-[#594100]">
          Posts
        </h1>
        <div className="grid grid-cols-3 gap-5">
          {posts.map((data, _) => {
            return (
              <Card key={data.id}>
                <Card.title>
                    <p>{data.title}</p>
                    <ProgressLabel progress={data.progress} />
                </Card.title>
                <Card.content>this is will be the content</Card.content>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
