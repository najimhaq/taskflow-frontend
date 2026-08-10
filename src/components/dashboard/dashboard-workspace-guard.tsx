'use client';

import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { LoaderCircle } from 'lucide-react';

import { useWorkspace } from '@/features/workspace/workspace-provider';

type DashboardWorkspaceGuardProps = {
  children: ReactNode;
};

export function DashboardWorkspaceGuard({
  children,
}: DashboardWorkspaceGuardProps) {
  const { currentMembership, errorMessage, isLoading } = useWorkspace();

  useEffect(() => {
    if (!isLoading && !errorMessage && !currentMembership) {
      window.location.replace('/onboarding/create-workspace');
    }
  }, [currentMembership, errorMessage, isLoading]);

  if (isLoading) {
    return (
      <div className='grid min-h-[calc(100vh-9rem)] place-items-center'>
        <div className='flex flex-col items-center gap-4'>
          <LoaderCircle className='size-6 animate-spin text-accent' />

          <p className='text-sm font-semibold text-text-secondary'>
            Loading your workspace...
          </p>
        </div>
      </div>
    );
  }

  if (errorMessage) {
    return (
      <div className='grid min-h-[calc(100vh-9rem)] place-items-center'>
        <div className='max-w-sm text-center'>
          <p className='text-sm font-bold text-danger'>
            Unable to load workspace
          </p>

          <p className='mt-2 text-sm text-text-secondary'>{errorMessage}</p>
        </div>
      </div>
    );
  }

  if (!currentMembership) {
    return (
      <div className='grid min-h-[calc(100vh-9rem)] place-items-center'>
        <p className='text-sm font-medium text-text-secondary'>
          Redirecting to workspace setup...
        </p>
      </div>
    );
  }

  return <>{children}</>;
}
