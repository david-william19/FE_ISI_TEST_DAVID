import { Post } from "@/generated/prisma";
import fetchInstance from "@/lib/fetch";
import { useCallback, useState } from "react";

export default function usePosts() {
    const [data, setData] = useState<Post[]>([])
    const [loading, setLoading] = useState<Boolean>(false)
    const [error, setError] = useState<unknown>()
    const getPosts = useCallback(async () => {
        try {
            setLoading(true)
            const response = await fetchInstance('/api/posts', {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
              })
    
              return response;
        } catch(err) {
            setError(err)
        } finally {
            setLoading(false)
        }
    }, [])

    return {
        getPosts,
        loading,
        error
    }
}