import { Post } from "@/generated/prisma";
import fetchInstance from "@/lib/fetch";
import { useCallback, useState } from "react";

export default function usePosts() {
    const [data, setData] = useState<Post[]>([])
    const [loading, setLoading] = useState<Boolean>(false)
    const [error, setError]
    const getPosts = useCallback(async () => {
        setLoading(true)
        try {
            const response = await fetchInstance('/api/posts', {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
              })
    
              return response;
        } catch(err) {

        }
    }, [])

    return {
        getPosts
    }
}