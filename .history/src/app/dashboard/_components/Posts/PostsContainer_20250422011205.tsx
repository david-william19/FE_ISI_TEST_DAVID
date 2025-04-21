"use client"

import { useEffect } from "react";

export function PostsContainer() {
    useEffect(() => {

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