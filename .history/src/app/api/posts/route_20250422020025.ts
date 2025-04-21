import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function GET(request: Request) {
    // Read the cookie header
    try {

        // Fetch posts from the database
        const posts = await prisma.post.findMany();

        return NextResponse.json(posts, { status: 200 });
    } catch (error) {
        console.error('Token validation error:', error);
        return NextResponse.json({ error: 'Unauthorized: Invalid token' }, { status: 401 });
    }
}