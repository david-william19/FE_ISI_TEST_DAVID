"use client"

import usePosts from "@/hooks/posts/usePosts";
import { useEffect } from "react";

export function PostsContainer() {
    const {getPosts, loading, error} = usePosts()
    useEffect(() => {
        getPosts()
    }, [])

    return (
        <>
        {
            loading ? (
                <div>
                    </div>
            )
        }
        </>
    )
}