"use client";

import { useState, ChangeEvent } from 'react';

// Define a prop type for a callback function
// This lets you send the uploaded URL back to the parent page
type ImageUploaderProps = {
  onUploadComplete: (url: string) => void;
};

export default function ImageUploader({ onUploadComplete }: ImageUploaderProps) {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [message, setMessage] = useState<string>('');

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;

    if (selectedFile) {
      setFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile));
      setMessage('');
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!file) {
      setMessage('Please select a file to upload.');
      return;
    }

    setMessage('Uploading...');
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('/api/upload-image', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        throw new Error('Upload failed');
      }

      const data = await res.json();
      const imageUrl = data.url;

      setMessage('Upload successful!');
      setPreviewUrl(null); // Clear preview after successful upload
      setFile(null);
      
      // Send the URL back to the parent component
      onUploadComplete(imageUrl);

    } catch (error) {
      console.error(error);
      setMessage(`Upload failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleFileChange} 
        />
        <button 
          type="submit" 
          disabled={!file}
          style={{ cursor: !file ? 'not-allowed' : 'pointer' }}
        >
          Upload Image
        </button>
      </form>

      {/* Show Image Preview */}
      {previewUrl && (
        <div style={{ marginTop: '1rem' }}>
          <p>Preview:</p>
          <img src={previewUrl} alt="Image preview" width={200} />
        </div>
      )}

      {/* Show Status Message */}
      {message && <p>{message}</p>}
    </div>
  );
}