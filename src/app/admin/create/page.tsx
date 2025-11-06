'use client';

import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';

// Import Quill styles directly
import 'react-quill-new/dist/quill.snow.css';

// Dynamically import ReactQuill to avoid SSR issues
const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

export default function CreatePost() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  // Auto-generate slug from title
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    // Simple slugify
    setSlug(newTitle.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, ''));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, slug, content }),
      });

      if (res.ok) {
        alert('Post created successfully!');
        // Optionally reset form or redirect
         router.push('/blog'); 
      } else {
        const data = await res.json();
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      alert('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  // Configure the Toolbar options
  const modules = useMemo(() => ({
    toolbar: {
      container: [
        [{ 'header': [1, 2, 3, false] }], // Heading 1, 2, 3, Normal
        ['bold', 'italic', 'underline', 'strike'], // Text formatting
        [{ 'list': 'ordered'}, { 'list': 'bullet' }], // Lists
        ['link', 'image'], // Link and Image
        ['clean'] // Remove formatting
      ],
    }
  }), []);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white text-black"> 
      <h1 className="text-3xl font-bold mb-6">Write a New Blog Post</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Title & Slug Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold mb-2">Title</label>
              <input
                type="text"
                required
                value={title}
                onChange={handleTitleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter post title..."
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Slug (URL)</label>
              <input
                type="text"
                required
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded bg-gray-50"
              />
            </div>
        </div>

        {/* Rich Text Editor Section */}
        <div>
          <label className="block text-sm font-bold mb-2">Content</label>
          <div className="h-[400px] mb-12"> {/* Fixed height container for editor */}
             <ReactQuill 
                theme="snow"
                value={content}
                onChange={setContent}
                modules={modules}
                className="h-full"
             />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors disabled:opacity-50 font-semibold"
        >
          {loading ? 'Publishing...' : 'Publish Post'}
        </button>
      </form>
    </div>
  );
}