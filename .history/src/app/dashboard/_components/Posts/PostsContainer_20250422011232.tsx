"use client"

import usePosts from "@/hooks/posts/usePosts";
import { useEffect } from "react";

export function PostsContainer() {
    const {getPosts, loading, error} = usePosts()
    useEffect(() => {
        getPosts()
    }, [])
    return (
        <div className="grid grid-cols-3 gap-5">
            {posts.map((data: Post, _: number) => {
            return (
              <Card key={data.id}>
              <Card.title>
                <p className="font-semibold text-xl">{data.title}</p>
                <ProgressLabel progress={data.progress as Progress} />
              </Card.title>
              <hr className="my-5" />
              <Card.content>{data.content}</Card.content>
              </Card>
            );
            })}
        </div>
    )
}