import { useCallback, useState } from 'react';

interface LoginCredentials {
    email: string;
    password: string;
}

interface UseLoginReturn {
    login: (credentials: LoginCredentials) => Promise<void>;
    isLoading: boolean;
    error: string | null;
}

export const useLogin = (): UseLoginReturn => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const login = useCallback(async ({ email, password }: LoginCredentials) => {
        setIsLoading(true);
        setError(null);

        try {
            // Replace with your API call
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error('Invalid email or password');
            }

            const data = await response.json();
            
            localStorage.
        } catch (err: any) {
            setError(err.message || 'Something went wrong');
        } finally {
            setIsLoading(false);
        }
    }, []);

    return { login, isLoading, error };
};