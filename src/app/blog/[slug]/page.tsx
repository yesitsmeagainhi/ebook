import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

// TypeScript interface for the post object
interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  published: boolean;
  createdAt: Date;
  imageUrl?: string; // Optional: only if your posts have images
}

// Mock data - replace with your actual data fetching logic
const mockPosts: Post[] = [
  {
    id: '1',
    title: 'Welcome to Our Blog',
    slug: 'welcome-to-our-blog',
    content: 'This is our first blog post. Welcome to our new website!\n\nWe will be sharing updates and insights here regularly.',
    published: true,
    createdAt: new Date('2024-01-15'),
    imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800',
  },
  {
    id: '2',
    title: 'Getting Started with Next.js',
    slug: 'getting-started-with-nextjs',
    content: 'Next.js is a powerful React framework that enables server-side rendering and static site generation.\n\nIn this post, we explore the basics of getting started with pages, routing, and data fetching.',
    published: true,
    createdAt: new Date('2024-01-20'),
    imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800',
  },
  {
    id: '3',
    title: 'Understanding Server Components',
    slug: 'understanding-server-components',
    content: 'React Server Components are a new paradigm in React development that allows components to render on the server.\n\nLearn how they work and when to use them in your Next.js applications.',
    published: true,
    createdAt: new Date('2024-01-25'),
    // No imageUrl for this post to demonstrate conditional rendering
  },
];

export default async function SinglePostPage({ params }: PageProps) {
  const { slug } = await params;

  // Replace this with your actual data fetching logic
  // Example: const post = await fetch(`https://your-api.com/posts/${slug}`).then(res => res.json())
  const post = mockPosts.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      {/* 1. The Title */}
      <h1 className="text-4xl font-bold mb-6">{post.title}</h1>

      {/* 2. The Image - ONLY renders if your post has one */}
      {post.imageUrl && (
        <img 
           src={post.imageUrl} 
           alt={post.title}
           style={{ width: '100%', height: 'auto', marginBottom: '20px', borderRadius: '8px' }} 
        />
      )}

      {/* 3. The Content */}
      <div className="blog-content">
         {/* If your content is plain text: */}
         <p style={{ whiteSpace: 'pre-wrap' }}>{post.content}</p>
         
         {/* OR, if your content is saved as HTML in the database, use this instead:
         <div dangerouslySetInnerHTML={{ __html: post.content || '' }} /> 
         */}
      </div>
    </main>
  );
}