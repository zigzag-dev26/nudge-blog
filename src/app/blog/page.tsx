import type { Metadata } from 'next';
import Link from 'next/link';
import { getSortedPosts } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'ADHD Cleaning Tips & Strategies',
  description: 'Evidence-based cleaning tips for ADHD brains. Break the freeze, build gentle habits.',
  alternates: { canonical: 'https://nudgeclean.app/blog' },
};

export default function BlogPage() {
  const posts = getSortedPosts();
  return (
    <div className='max-w-3xl mx-auto px-4 py-12'>
      <div className='mb-10'>
        <h1 className='text-3xl font-bold mb-3'>ADHD Cleaning Tips & Strategies</h1>
        <p className='text-lg text-gray-600'>No guilt, no shame. Just practical strategies for ADHD brains who want a livable home.</p>
      </div>
      <div className='space-y-8'>
        {posts.map((post) => (
          <article key={post.slug} className='group border-b border-gray-100 pb-8 last:border-0'>
            <Link href={'/blog/' + post.slug} className='block'>
              <div className='flex flex-wrap gap-2 mb-2'>
                {post.tags.map((tag) => <span key={tag} className='text-xs px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded-full'>{tag}</span>)}
              </div>
              <h2 className='text-xl font-semibold mb-2 group-hover:text-emerald-600'>{post.title}</h2>
              <p className='text-gray-600 mb-3'>{post.excerpt}</p>
              <div className='flex items-center gap-3 text-sm text-gray-400'>
                <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US',{year:'numeric',month:'long',day:'numeric'})}</time>
                <span>&middot;</span>
                <span>{post.readingTime} min read</span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}