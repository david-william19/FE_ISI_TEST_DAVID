import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
    const token = req.cookies.get('token'); // Read the token from the 'token' cookie

    console.log('Token from Cookie:', token);

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
