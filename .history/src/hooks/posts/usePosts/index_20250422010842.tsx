import fetchInstance from "@/lib/fetch";
import { useCallback } from "react";

export default function usePosts() {
    const getPosts = useCallback(async () => {
        const response = await fetchInstance('/api/posts', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
          })
        
          return response;
    }, [])
}