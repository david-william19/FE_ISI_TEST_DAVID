const fetchInstance = async (url: string, options?: RequestInit) => {

    const response = await fetch(url, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...(options?.headers || {}),
        },
    });

    // if (response.status === 401) {
    //     // Redirect to login page if unauthorized
    //     window.location.href = '/';
    //     return; // Stop further execution
    // }

    if (!response.ok) {
        throw new Error(`Fetch error: ${response.statusText}`);
    }

    return response.json();
};

export default fetchInstance;