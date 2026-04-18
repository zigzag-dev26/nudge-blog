import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://nudgeclean.app'),
  title: { default: 'Nudge — AI Cleaning Coach', template: '%s | Nudge' },
  description: 'Your AI-powered cleaning coach. Small steps, real progress.',
  keywords: ['ADHD cleaning app','cleaning schedule for ADHD','how to clean when overwhelmed'],
  openGraph: { type: 'website', url: 'https://nudgeclean.app', siteName: 'Nudge', title: 'Nudge', description: 'Your AI-powered cleaning coach.' },
  robots: { index: true, follow: true },
  verification: { google: 'AKypKX8o6KeW5PmK3xnX4zzY70SWjU3teqUTQWJxPNk' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Nudge – AI Cleaning Coach',
  operatingSystem: 'iOS',
  applicationCategory: 'LifestyleApplication',
  description:
    'Nudge is an AI-powered cleaning coach for people with ADHD, executive dysfunction, and task initiation struggles. Get personalized cleaning plans based on your energy level, break through the freeze with the Panic Button, and track momentum — not perfection.',
  offers: {
    '@type': 'Offer',
    price: '6.99',
    priceCurrency: 'USD',
    priceSpecification: [
      { '@type': 'UnitPriceSpecification', price: '6.99', priceCurrency: 'USD', billingDuration: 'P1M' },
      { '@type': 'UnitPriceSpecification', price: '49.99', priceCurrency: 'USD', billingDuration: 'P1Y' },
    ],
  },
  url: 'https://nudgeclean.app',
  keywords: [
    'ADHD cleaning app',
    'cleaning motivation app',
    'AI cleaning coach',
    'task initiation app',
    'cleaning app for overwhelm',
    'executive dysfunction app',
    'cleaning schedule ADHD',
    'ADHD household management',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className='bg-[#fafaf8] text-gray-900 antialiased'>
        <header className='border-b border-gray-100 py-4'>
          <div className='max-w-3xl mx-auto px-4 flex items-center justify-between'>
            <Link href='/' className='text-xl font-bold text-[#87A878]'>Nudge</Link>
            <nav className='flex gap-6 text-sm'>
              <Link href='/' className='text-gray-600 hover:text-gray-900'>Home</Link>
              <Link href='/blog' className='text-gray-600 hover:text-gray-900'>Blog</Link>
              <Link href='/about' className='text-gray-600 hover:text-gray-900'>About</Link>
              <Link href='/privacy' className='text-gray-600 hover:text-gray-900'>Privacy</Link>
              <Link href='/terms' className='text-gray-600 hover:text-gray-900'>Terms</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className='mt-20 border-t border-gray-100 py-8 text-center text-sm text-gray-500'>
          <p>Made with care for ADHD brains &mdash; <Link href='/' className='text-[#87A878] hover:underline'>nudgeclean.app</Link></p>
        </footer>
      </body>
    </html>
  );
}