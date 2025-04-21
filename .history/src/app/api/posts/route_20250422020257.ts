import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function GET(request: Request) {
    // Check for cookies in the request
    const cookieHeader = request.headers.get('cookie');
    if (!cookieHeader) {
        return NextResponse.json({ error: 'Unauthorized: No cookies found' }, { status: 401 });
    }

    // Parse cookies to extract the token
    const cookies = Object.fromEntries(cookieHeader.split('; ').map(c => c.split('=')));
    const token = cookies['token']; // Replace 'token' with the actual cookie name

    console.log(cookies + "")

    if (!token) {
        return NextResponse.json({ error: 'Unauthorized: Token not found in cookies' }, { status: 401 });
    }

    try {
        // Verify the token
        const secretKey = 'your-secret-key'; // Replace with your actual secret key
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