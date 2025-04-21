import { Post } from "@/generated/prisma";
import fetchInstance from "@/lib/fetch";
import { useCallback, useState } from "react";

export default function usePosts() {
    const [data, setData] = useState<Post[]>([])
    const [loading, setLoading] = useState<>
    const getPosts = useCallback(async () => {
        const response = await fetchInstance('/api/posts', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
          })
          
          setData(data)

          return response;
    }, [])

    return {
        getPosts
    }
}