import Link from 'next/link';
import { ArrowRight, Command } from 'lucide-react';

export function CtaSection() {
  return (
    <section id='for-teams' className='scroll-mt-24'>
      <div className='mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:pb-28'>
        <div className='relative isolate overflow-hidden rounded-3xl border border-[rgba(129,117,255,0.35)] bg-surface px-6 py-14 text-center shadow-[0_22px_60px_rgba(0,0,0,0.2)] sm:px-12 sm:py-20'>
          <div
            aria-hidden='true'
            className='absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(109,93,251,0.28),transparent_55%),radial-gradient(circle_at_85%_95%,rgba(34,211,238,0.1),transparent_30%)]'
          />

          <div className='mx-auto max-w-2xl'>
            <span className='mx-auto grid size-12 place-items-center rounded-2xl border border-[rgba(129,117,255,0.25)] bg-[rgba(109,93,251,0.18)] text-[#B6AFFF] shadow-[0_0_30px_rgba(109,93,251,0.18)]'>
              <Command className='size-6' />
            </span>

            <p className='mt-6 text-sm font-bold uppercase tracking-[0.16em] text-accent'>
              Built for teams in motion
            </p>

            <h2 className='mt-4 text-3xl font-bold tracking-[-0.045em] text-text-primary sm:text-4xl'>
              The calm workspace your team has been looking for.
            </h2>

            <p className='mt-4 text-base leading-7 text-text-secondary'>
              Create a workspace, invite your team, and start turning plans into
              progress today.
            </p>

            <Link
              href='/sign-up'
              className='mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-[0_12px_30px_rgba(109,93,251,0.32)]'
            >
              Create your workspace
              <ArrowRight className='size-4' />
            </Link>

            <p className='mt-4 text-xs font-medium text-text-muted'>
              Free to start. No credit card required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
