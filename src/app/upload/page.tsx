"use client"; // This page must be a client component to use state

import ImageUploader from '../components/ImageUploader';
import { useState } from 'react';

export default function HomePage() {
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);

  // This function will be called by the ImageUploader component
  // when an upload is complete.
  const handleUpload = (url: string) => {
    console.log('New image URL:', url);
    setUploadedImageUrl(url);
    // Here you would typically save this URL to your database
    // using another API call (e.g., to update a user profile or product)
  };

  return (
    <main>
      <h1>My Image Uploader</h1>
      
      <ImageUploader onUploadComplete={handleUpload} />

      {/* Show the final uploaded image */}
      {uploadedImageUrl && (
        <div style={{ marginTop: '2rem' }}>
          <h3>Image successfully uploaded and saved:</h3>
          <img src={uploadedImageUrl} alt="Uploaded image" width={300} />
          <p>{uploadedImageUrl}</p>
        </div>
      )}
    </main>
  );
}