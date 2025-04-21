import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function GET(request: Request) {
    // Read the cookie header
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