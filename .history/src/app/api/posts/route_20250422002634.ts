import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(res) {
    try {
        const posts = await prisma.post.findMany();
        return NextResponse.json(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
        return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}