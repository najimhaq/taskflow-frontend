import Link from 'next/link';
import { ArrowRight, Check, Sparkles } from 'lucide-react';

import { ProductPreview } from './product-preview';

export function HeroSection() {
  return (
    <section className='relative isolate overflow-hidden'>
      <div
        aria-hidden='true'
        className='absolute inset-x-0 top-0 -z-10 h-[620px] bg-[radial-gradient(circle_at_50%_-15%,rgba(109,93,251,0.32),transparent_46%),radial-gradient(circle_at_85%_22%,rgba(34,211,238,0.13),transparent_26%)]'
      />

      <div className='mx-auto max-w-7xl px-5 pb-20 pt-20 sm:px-8 sm:pt-28 lg:pb-28 lg:pt-32'>
        <div className='mx-auto max-w-4xl text-center'>
          <div className='inline-flex items-center gap-2 rounded-full border border-[rgba(129,117,255,0.35)] bg-[rgba(109,93,251,0.12)] px-3 py-1.5 text-xs font-semibold text-[#C9C4FF]'>
            <Sparkles className='size-3.5' />
            Designed for high-performing teams
          </div>

          <h1 className='mt-7 text-4xl font-bold tracking-[-0.06em] text-text-primary sm:text-6xl lg:text-7xl'>
            Work moves faster when{' '}
            <span className='bg-gradient-to-r from-[#A59BFF] via-[#8CDDF3] to-[#C9C4FF] bg-clip-text text-transparent'>
              everything flows.
            </span>
          </h1>

          <p className='mx-auto mt-6 max-w-2xl text-base leading-7 text-text-secondary sm:text-lg'>
            TaskFlow gives your team one focused workspace to plan projects,
            collaborate with clarity, and ship meaningful work—without the
            chaos.
          </p>

          <div className='mt-9 flex flex-col justify-center gap-3 sm:flex-row'>
            <Link
              href='/sign-up'
              className='inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-[0_12px_30px_rgba(109,93,251,0.32)]'
            >
              Start for free
              <ArrowRight className='size-4' />
            </Link>

            <a
              href='#features'
              className='inline-flex items-center justify-center rounded-xl border border-border bg-surface/70 px-5 py-3 text-sm font-bold text-text-primary transition-colors hover:bg-surface-elevated'
            >
              Explore TaskFlow
            </a>
          </div>

          <div className='mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-medium text-text-muted'>
            <span className='inline-flex items-center gap-1.5'>
              <Check className='size-3.5 text-success' />
              No credit card required
            </span>

            <span className='inline-flex items-center gap-1.5'>
              <Check className='size-3.5 text-success' />
              Set up in minutes
            </span>

            <span className='inline-flex items-center gap-1.5'>
              <Check className='size-3.5 text-success' />
              Built for growing teams
            </span>
          </div>
        </div>

        <ProductPreview />
      </div>
    </section>
  );
}
