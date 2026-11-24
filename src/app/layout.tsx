import type { Metadata } from 'next';
import { Inter, Newsreader } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const newsreader = Newsreader({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-newsreader',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://theschooloffathers.com'),
  title: 'The School of Fathers — A Modern Editorial Handbook by CP Singh',
  description:
    'Raising Children. Building Character. Creating Legacy. The foundational handbook for modern fathers who refuse to be passive. Digital Edition by CP Singh.',
  keywords: [
    'The School of Fathers',
    'CP Singh',
    'Fatherhood book',
    'conscious parenting',
    'intentional fatherhood',
    'modern parenting guide',
  ],
  authors: [{ name: 'CP Singh' }],
  openGraph: {
    title: 'The School of Fathers — CP Singh',
    description: 'Understand Fatherhood. Raise Better Humans. Leave a Better Legacy.',
    url: 'https://superprofile.bio/vp/the-school-of-fathers',
    siteName: 'The School of Fathers',
    images: [
      {
        url: '/images/front_cover.jpg',
        width: 914,
        height: 1388,
        alt: 'The School of Fathers by CP Singh',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The School of Fathers — CP Singh',
    description: 'Raising Children. Building Character. Creating Legacy.',
    images: ['/images/front_cover.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-screen font-sans selection:bg-obsidian selection:text-white relative mesh-gradient antialiased">
        {children}
      </body>
    </html>
  );
}
