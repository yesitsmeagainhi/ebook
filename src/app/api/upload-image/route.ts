import { NextResponse, NextRequest } from 'next/server';
import cloudinary from '@/lib/cloudinary';

export async function POST(request: NextRequest) {
  try {
    const data = await request.formData();
    const file = data.get('file') as File | null;

    if (!file) {
      return NextResponse.json(
        { message: 'No file found' },
        { status: 400 }
      );
    }

    // Read the file into a buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Convert buffer to base64 for uploading
    const base64 = buffer.toString('base64');
    const dataURI = `data:${file.type};base64,${base64}`;

    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(dataURI, {
      folder: 'derssingschool_uploads', // Optional: customize folder name
    });

    return NextResponse.json({
      message: 'Upload successful',
      url: result.secure_url,
    });
  } catch (error) {
    console.error('Upload Error:', error);
    return NextResponse.json(
      { message: 'Upload failed', error: (error as Error).message },
      { status: 500 }
    );
  }
}