import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import './globals.css';
import { SmoothScrollProvider } from '@/components/lenis/smooth-scroll-provider';
import { ScrollReset } from '@/components/lenis/scroll-reset';
import { ScrollProgress } from '@/components/lenis/scroll-progress';
import { BackToTop } from '@/components/lenis/back-to-top';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'TaskFlow — Work, organized',
    template: '%s | TaskFlow',
  },
  description:
    'TaskFlow is a modern workspace for teams to plan, organize, and deliver meaningful work together.',
  keywords: [
    'Task management',
    'Team collaboration',
    'Project management',
    'TaskFlow',
    'SaaS',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      data-scroll-behavior='smooth'
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className='min-h-full bg-canvas font-sans text-text-primary'>
        <SmoothScrollProvider>
          <ScrollReset />
          <ScrollProgress />
          <main className='grow'>
            <div className='mx-auto max-w-full'>{children}</div>
          </main>
          <BackToTop />
        </SmoothScrollProvider>

        <Toaster
          position='top-right'
          toastOptions={{
            style: {
              background: '#171717',
              color: '#fff',
              border: '1px solid rgba(255,255,255,0.1)',
            },
          }}
        />
      </body>
    </html>
  );
}
