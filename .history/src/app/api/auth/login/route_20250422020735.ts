import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import prisma from '@/lib/prisma';
import { cookies } from 'next/headers';

const SECRET_KEY = process.env.JWT_SECRET || 'your-secret-key';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, password } = body;
        const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)

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
            expiresIn: '1d',
        });

        const cookieStore = await cookies()
 
        cookieStore.set('token', token, {
          httpOnly: true,
          secure: true,
          expires: expiresAt,
          sameSite: 'lax',
          path: '/',
        })

        return NextResponse.json({message: 'login successfull'});
    } catch (error) {
        return NextResponse.json(
            { error: 'Internal server error.' },
            { status: 500 }
        );
    }
}