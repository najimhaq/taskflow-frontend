import Link from 'next/link';

import { ArrowRight } from 'lucide-react';

import { Logo } from './logo';

const navigationItems = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'For teams', href: '#for-teams' },
] as const;

export function LandingNavbar() {
  return (
    <header className='sticky top-0 z-50 border-b border-border/70 bg-canvas/85 backdrop-blur-xl'>
      <div className='mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8'>
        <Logo />

        <nav className='hidden items-center gap-7 md:flex'>
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className='text-sm font-medium text-text-secondary transition-colors hover:text-text-primary'
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className='flex items-center gap-3'>
          <Link
            href='/sign-in'
            className='hidden rounded-lg px-3 py-2 text-sm font-semibold text-text-secondary transition-colors hover:text-text-primary sm:inline-flex'
          >
            Sign in
          </Link>

          <Link
            href='/sign-up'
            className='inline-flex items-center gap-2 rounded-lg bg-primary px-3.5 py-2 text-sm font-semibold text-white transition-all hover:bg-primary-hover hover:shadow-[0_0_25px_rgba(109,93,251,0.35)]'
          >
            Get started
            <ArrowRight className='size-4' />
          </Link>
        </div>
      </div>
    </header>
  );
}
