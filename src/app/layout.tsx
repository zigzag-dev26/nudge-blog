import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://nudgeclean.app'),
  title: { default: 'Nudge Blog — ADHD Cleaning Tips', template: '%s | Nudge Blog' },
  description: 'Practical cleaning strategies for ADHD brains. No guilt, no shame.',
  keywords: ['ADHD cleaning app','cleaning schedule for ADHD','how to clean when overwhelmed'],
  openGraph: { type: 'website', url: 'https://nudgeclean.app/blog', siteName: 'Nudge', title: 'Nudge Blog', description: 'Practical ADHD cleaning strategies.' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='bg-white text-gray-900 antialiased'>
        <header className='border-b border-gray-100 py-4'>
          <div className='max-w-3xl mx-auto px-4 flex items-center justify-between'>
            <a href='https://nudgeclean.app' className='text-xl font-bold text-emerald-600'>Nudge</a>
            <nav className='flex gap-6 text-sm'>
              <a href='https://nudgeclean.app' className='text-gray-600 hover:text-gray-900'>App</a>
              <a href='/blog' className='text-gray-600 hover:text-gray-900 font-medium'>Blog</a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className='mt-20 border-t border-gray-100 py-8 text-center text-sm text-gray-500'>
          <p>Made with care for ADHD brains &mdash; <a href='https://nudgeclean.app' className='text-emerald-600 hover:underline'>nudgeclean.app</a></p>
        </footer>
      </body>
    </html>
  );
}