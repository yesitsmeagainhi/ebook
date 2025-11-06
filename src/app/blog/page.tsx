import Link from 'next/link';
import { PrismaClient } from '@prisma/client';

// Use a global Prisma client to avoid too many connections in dev
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

// This is a Server Component, so it can fetch data directly!
export default async function BlogPage() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    orderBy: { createdAt: 'desc' },
  });

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