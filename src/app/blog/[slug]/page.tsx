import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPost, getAllSlugs } from '@/lib/posts';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = await getPost(slug);
    return { title: post.title, description: post.excerpt, alternates: { canonical: 'https://nudgeclean.app/blog/' + slug }, openGraph: { title: post.title, description: post.excerpt, type: 'article', publishedTime: post.date } };
  } catch { return { title: 'Post not found' }; }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  let post;
  try { post = await getPost(slug); } catch { notFound(); }
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { '@type': 'Organization', name: 'Nudge', url: 'https://nudgeclean.app' },
    publisher: { '@type': 'Organization', name: 'Nudge', url: 'https://nudgeclean.app' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://nudgeclean.app/blog/${slug}` },
    keywords: post.tags.join(', '),
  };
  return (
    <article className='max-w-3xl mx-auto px-4 py-12'>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Link href='/blog' className='text-sm text-emerald-600 hover:underline mb-8 inline-block'>&larr; All posts</Link>
      <div className='flex flex-wrap gap-2 mb-4'>
        {post.tags.map((tag) => <span key={tag} className='text-xs px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded-full'>{tag}</span>)}
      </div>
      <h1 className='text-3xl font-bold mb-4'>{post.title}</h1>
      <div className='flex items-center gap-3 text-sm text-gray-400 mb-8'>
        <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US',{year:'numeric',month:'long',day:'numeric'})}</time>
        <span>&middot;</span>
        <span>{post.readingTime} min read</span>
      </div>
      <div className='prose prose-emerald prose-lg max-w-none' dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      <div className='mt-12 pt-8 border-t border-gray-100'>
        <div className='bg-emerald-50 rounded-2xl p-6 text-center'>
          <p className='text-lg font-semibold mb-2'>Your home does not need to be perfect, just livable.</p>
          <p className='text-gray-600 mb-4'>Nudge gives you AI cleaning plans built for ADHD brains.</p>
          <a href='https://nudgeclean.app' className='inline-block bg-emerald-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-emerald-700'>Try Nudge free for 7 days</a>
        </div>
      </div>
    </article>
  );
}