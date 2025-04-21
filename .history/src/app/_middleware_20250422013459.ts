import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
    const authHeader = req.headers.get('Authorization');
    const token = authHeader?.split(' ')[1]; // Extract the token from "Bearer <token>"

    console.log('Authorization Header:', authHeader);
    console.log('Extracted Token:', token);

    // If no token is present, redirect to the home page
    if (!token) {
        return NextResponse.redirect(new URL('/', req.url));
    }

    // If token exists, allow the request to proceed
    return NextResponse.next();
}

export const config = {
    matcher: '/dashboard/:*', // Apply middleware to all routes under /dashboard
};