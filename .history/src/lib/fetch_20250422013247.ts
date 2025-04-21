const fetchInstance = async (url: string, options?: RequestInit) => {

    const response = await fetch(url, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...(options?.headers || {}),
        },
    });

    console.log(response)

    if (!response.ok) {
        throw new Error(`Fetch error: ${response.statusText}`);
    }

    if(response.status.)

    return response.json();
};

export default fetchInstance;