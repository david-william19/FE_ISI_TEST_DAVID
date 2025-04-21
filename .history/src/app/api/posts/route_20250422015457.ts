import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function GET(request: Request) {
    // Read the cookie header
    const cookieHeader = request.headers.get('cookie');

    if (!cookieHeader) {
        // If the cookie header is missing, return unauthorized
        return NextResponse.json({ error: 'Unauthorized: No cookies found' }, { status: 401 });
    }

    // Parse cookies into an object
    const cookies = Object.fromEntries(cookieHeader.split('; ').map(c => c.split('=')));
    const token = cookies['token']; // Replace 'token' with the name of your cookie

    if (!token) {
        // If the token cookie is missing, return unauthorized
        return NextResponse.json({ error: 'Unauthorized: Token not found in cookies' }, { status: 401 });
    }

    try {
        // Validate the token
        const secretKey = 'testingpost123'; // Replace with your actual secret key
        const decoded = jwt.verify(token, secretKey);

        console.log('Decoded Token:', decoded);

        // Fetch posts from the database
        const posts = await prisma.post.findMany();

        return NextResponse.json(posts, { status: 200 });
    } catch (error) {
        console.error('Token validation error:', error);
        return NextResponse.json({ error: 'Unauthorized: Invalid token' }, { status: 401 });
    }
}