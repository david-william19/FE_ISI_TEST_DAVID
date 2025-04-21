import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function GET(request: Request) {
    // Read the token from cookies
    const cookieHeader = request.headers.get('cookie');
    const cookies = Object.fromEntries(cookieHeader?.split('; ').map(c => c.split('=')) || []);
    const token = cookies['token']; // Replace 'token' with the name of your cookie

    if (!token) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        // Validate the token
        const secretKey = 'testin'; // Replace with your actual secret key
        const decoded = jwt.verify(token, secretKey);

        console.log('Decoded Token:', decoded);

        // Fetch posts from the database
        const posts = await prisma.post.findMany();

        return NextResponse.json(posts, { status: 200 });
    } catch (error) {
        console.error('Token validation error:', error);
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
}