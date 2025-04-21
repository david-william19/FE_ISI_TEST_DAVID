import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const token = request.headers.get('Authorization');

    if (!token) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        // Mock data for posts
        const posts = [
            { id: 1, title: 'First Post', content: 'This is the first post.' },
            { id: 2, title: 'Second Post', content: 'This is the second post.' },
        ];

        return NextResponse.json(posts, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}