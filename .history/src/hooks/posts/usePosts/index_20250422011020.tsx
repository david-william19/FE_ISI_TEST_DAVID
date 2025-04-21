import { Post } from "@/generated/prisma";
import fetchInstance from "@/lib/fetch";
import { useCallback, useState } from "react";

export default function usePosts() {
    const [data, setData] = useState<Post[]>([])
    const [loading, setLoading] = useState<Boolean>(false)
    const getPosts = useCallback(async () => {
        setLoading(true)
        {}
    }, [])

    return {
        getPosts
    }
}