import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import prisma from '@/lib/prisma';

const SECRET_KEY = process.env.JWT_SECRET || 'your-secret-key';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, password } = body;

        // Validate input
        if (!email || !password) {
            return NextResponse.json(
                { error: 'Email and password are required.' },
                { status: 400 }
            );
        }

        // Mock user validation (replace with your database logic)
        const user = await prisma.user.findMany({
            where: {
                email: email
            }
        })

        if(!user) return 

        if (user.password) {
            return NextResponse.json(
                { error: 'Invalid email or password.' },
                { status: 401 }
            );
        }

        // Generate JWT token
        const token = jwt.sign({ id: mockUser.id, email: mockUser.email }, SECRET_KEY, {
            expiresIn: '1h',
        });

        return NextResponse.json({ token });
    } catch (error) {
        return NextResponse.json(
            { error: 'Internal server error.' },
            { status: 500 }
        );
    }
}