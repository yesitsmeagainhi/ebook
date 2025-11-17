import { NextResponse } from 'next/server';

// TypeScript interface for the post object
interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// POST /api/posts - Creates a new blog post
// NOTE: This is a mock implementation. Replace with actual database logic.

export async function POST(request: Request) {
  try {
    // Parse the request body
    const data = await request.json();
    console.log("API Received Data:", data); // LOG 1: See what data arrived

    // Validate required fields
    if (!data.title || !data.slug || !data.content) {
       console.error("Validation Failed: Missing fields - title, slug, and content are required");
       return NextResponse.json({ error: 'Missing required fields: title, slug, and content' }, { status: 400 });
    }

    // MOCK DATABASE OPERATION
    // Replace this with your actual database logic (MongoDB, PostgreSQL, etc.)
    const newPost: Post = {
      id: Date.now().toString(), // Generate a simple unique ID
      title: data.title,
      slug: data.slug,
      content: data.content,
      published: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    // END MOCK

    console.log("DB Success:", newPost); // LOG 2: Confirm DB success
    return NextResponse.json({ success: true, post: newPost }, { status: 201 });

  } catch (error: any) {
    // LOG 3: THE IMPORTANT ONE - Print the actual error to your terminal
    console.error('---------------- API ERROR ----------------');
    console.error('Error creating post:', error);
    console.error('Error message:', error.message);
    console.error('Stack trace:', error.stack);
    console.error('-------------------------------------------');

    // Return error message to the client for debugging
    return NextResponse.json({
        error: 'Error creating post',
        details: error.message || 'Unknown error occurred'
    }, { status: 500 });
  }
}