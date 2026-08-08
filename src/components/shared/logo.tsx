import Link from 'next/link';
import { CheckSquare } from 'lucide-react';

type LogoProps = {
  href?: string;
  showTagline?: boolean;
};

export function Logo({ href = '/', showTagline = false }: LogoProps) {
  return (
    <Link
      href={href}
      className='group inline-flex items-center gap-2'
      aria-label='TaskFlow home'
    >
      <span className='grid size-9 place-items-center rounded-xl bg-primary text-white shadow-[0_0_28px_rgba(109,93,251,0.35)] transition-transform duration-200 group-hover:scale-105'>
        <CheckSquare className='size-[19px]' strokeWidth={2.5} />
      </span>

      <span className='flex flex-col'>
        <span className='text-lg font-bold tracking-[-0.04em] text-text-primary'>
          TaskFlow
        </span>

        {showTagline ? (
          <span className='text-[10px] font-medium uppercase tracking-[0.16em] text-text-muted'>
            Work, organized
          </span>
        ) : null}
      </span>
    </Link>
  );
}
