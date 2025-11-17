import Link from 'next/link';

// TypeScript interface for the post object
interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  published: boolean;
  createdAt: Date;
}

// Mock data - replace with your actual data fetching logic
// NOTE: This data will not persist and is for demonstration only
const mockPosts: Post[] = [
  {
    id: '1',
    title: 'Welcome to Our Blog',
    slug: 'welcome-to-our-blog',
    content: '<p>This is our first blog post. Welcome to our new website!</p><p>We will be sharing updates and insights here regularly.</p>',
    published: true,
    createdAt: new Date('2024-01-15'),
  },
  {
    id: '2',
    title: 'Getting Started with Next.js',
    slug: 'getting-started-with-nextjs',
    content: '<p>Next.js is a powerful React framework that enables server-side rendering and static site generation.</p><p>In this post, we explore the basics of getting started.</p>',
    published: true,
    createdAt: new Date('2024-01-20'),
  },
  {
    id: '3',
    title: 'Understanding Server Components',
    slug: 'understanding-server-components',
    content: '<p>React Server Components are a new paradigm in React development that allows components to render on the server.</p><p>Learn how they work and when to use them.</p>',
    published: true,
    createdAt: new Date('2024-01-25'),
  },
];

// This is a Server Component
export default async function BlogPage() {
  // Replace this with your actual data fetching logic
  // Example: const posts = await fetch('https://your-api.com/posts').then(res => res.json())
  const posts = mockPosts;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">Our Blog</h1>
      <div className="grid gap-6">
        {posts.map((post) => (
          <div key={post.id} className="border p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white text-black">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-2xl font-bold mb-2 hover:text-blue-600">{post.title}</h2>
            </Link>
            <p className="text-gray-600 text-sm mb-4">
              {new Date(post.createdAt).toLocaleDateString()}
            </p>
            {/* Show a short preview of content (stripping HTML tags for safety in preview) */}
             <p className="text-gray-700 line-clamp-3">
                {post.content.replace(/<[^>]+>/g, '').substring(0, 150)}...
             </p>
             <Link href={`/blog/${post.slug}`} className="text-blue-600 font-semibold mt-4 inline-block">
               Read More →
             </Link>
          </div>
        ))}

        {posts.length === 0 && (
          <p className="text-gray-500 text-center py-10">No posts found yet.</p>
        )}
      </div>
    </div>
  );
}