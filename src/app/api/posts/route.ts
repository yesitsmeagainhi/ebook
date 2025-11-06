import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

// Ensure only one instance of PrismaClient is used during dev
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log("API Received Data:", data); // LOG 1: See what data arrived

    if (!data.title || !data.slug || !data.content) {
       console.error("Validation Failed: Missing fields");
       return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const newPost = await prisma.post.create({
      data: {
        title: data.title,
        slug: data.slug,
        content: data.content,
        published: true,
      },
    });

    console.log("DB Success:", newPost); // LOG 2: Confirm DB success
    return NextResponse.json({ success: true, post: newPost }, { status: 201 });

  } catch (error: any) {
    // LOG 3: THE IMPORTANT ONE - Print the actual error to your terminal
    console.error('---------------- API ERROR ----------------');
    console.error(error);
    console.error('-------------------------------------------');

    // Return the actual error message to the client for easier debugging
    return NextResponse.json({
        error: 'Error creating post',
        details: error.message || 'Unknown error'
    }, { status: 500 });
  }
}