
import { Header } from "@/components";
import { PostsContainer } from "./_components";

export default async function DashboardPage() {
  return (
    <div className="w-full min-h-screen bg-[#FFDBDB]">
      <Header />
      <div className="container mx-auto">
        <h1 className="text-4xl font-semibold my-5 text-center text-[#594100]">
          Posts
        </h1>
        <PostsContainer />
      </div>
    </div>
  );
}
