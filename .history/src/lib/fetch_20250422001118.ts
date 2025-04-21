const fetchInstance = async (url: string, options?: RequestInit) => {

    const response = await fetch(`${url}`, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...(options?.headers || {}),
        },
    });

    if (!response.ok) {
        throw new Error(`Fetch error: ${response.statusText}`);
    }

    return response.json();
};

export default fetchInstance;