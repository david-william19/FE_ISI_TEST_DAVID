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
        const user = await prisma.user.findFirst({
            where: {
                email: email,
                password: password
            }
        });

        if (!user) {
            return NextResponse.json(
                { error: 'Invalid email or password.' },
                { status: 401 }
            );
        }

        // Generate JWT token
        const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, {
            expiresIn: '1h',
        });

        const response = NextResponse.json({ message: 'Login successful' });
        response.cookies.set('token', token, {
            httpOnly: true, // Prevents JS access to the cookie
            secure: process.env.NODE_ENV === 'production', // HTTPS only in prod
            path: '/',
            maxAge: 60 * 60 * 24, // 1 day
            sameSite: 'lax',
        });

        return response.status(200).json();

        return NextResponse.json({ token });
    } catch (error) {
        return NextResponse.json(
            { error: 'Internal server error.' },
            { status: 500 }
        );
    }
}