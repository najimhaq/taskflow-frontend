'use client';

import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { LoaderCircle } from 'lucide-react';

import { authClient } from '@/lib/auth-client';

type DashboardAuthGuardProps = {
  children: ReactNode;
};

export function DashboardAuthGuard({ children }: DashboardAuthGuardProps) {
  const { data: session, error, isPending } = authClient.useSession();

  useEffect(() => {
    if (!isPending && (error || !session)) {
      window.location.replace('/sign-in');
    }
  }, [error, isPending, session]);

  if (isPending) {
    return (
      <main className='grid min-h-screen place-items-center bg-canvas'>
        <div className='flex flex-col items-center gap-4'>
          <span className='grid size-12 place-items-center rounded-2xl border border-border bg-surface'>
            <LoaderCircle className='size-5 animate-spin text-accent' />
          </span>

          <div className='text-center'>
            <p className='text-sm font-bold text-text-primary'>
              Loading your workspace
            </p>
            <p className='mt-1 text-xs text-text-muted'>
              Preparing TaskFlow for you...
            </p>
          </div>
        </div>
      </main>
    );
  }

  if (error || !session) {
    return (
      <main className='grid min-h-screen place-items-center bg-canvas'>
        <p className='text-sm font-medium text-text-secondary'>
          Redirecting to sign in...
        </p>
      </main>
    );
  }

  return <>{children}</>;
}
