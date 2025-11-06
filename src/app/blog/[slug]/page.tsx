import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function SinglePostPage({ params }: PageProps) {
  const { slug } = await params;

  const post = await prisma.post.findUnique({
    where: { slug: slug },
  });

  if (!post) {
    notFound();
  }

  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      {/* 1. The Title */}
      <h1 className="text-4xl font-bold mb-6">{post.title}</h1>

      {/* 2. The Image - ONLY renders if your post has one.
          CHECK YOUR SCHEMA: Is the field called 'imageUrl', 'image', 'coverImage'? 
          Update 'post.imageUrl' below to match your database schema. */}
      {/* @ts-ignore - Remove this comment after you verify the field name exists */}
      {post.imageUrl && (
        <img 
           // @ts-ignore
           src={post.imageUrl} 
           alt={post.title}
           style={{ width: '100%', height: 'auto', marginBottom: '20px', borderRadius: '8px' }} 
        />
      )}

      {/* 3. The Content
          CHECK YOUR SCHEMA: Is it called 'content', 'body', or something else? */}
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