'use client';

import { useEffect, useRef, useState } from 'react';
import {
  Check,
  ChevronDown,
  LoaderCircle,
  Plus,
  Settings2,
} from 'lucide-react';
import Link from 'next/link';

import { useWorkspace } from '@/features/workspace/workspace-provider';
import { cn } from '@/lib/utils';

function formatRole(role: string) {
  return `${role.charAt(0)}${role.slice(1).toLowerCase()}`;
}

export function WorkspaceSwitcher() {
  const {
    memberships,
    currentMembership,
    errorMessage,
    isLoading,
    selectWorkspace,
  } = useWorkspace();

  const [isOpen, setIsOpen] = useState(false);

  const switcherRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        switcherRef.current &&
        !switcherRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  if (isLoading) {
    return (
      <div className='flex h-[74px] items-center gap-3 rounded-xl border border-border bg-surface p-3'>
        <span className='grid size-10 place-items-center rounded-lg bg-surface-elevated'>
          <LoaderCircle className='size-4 animate-spin text-accent' />
        </span>

        <div className='flex-1 space-y-2'>
          <div className='h-3 w-32 animate-pulse rounded bg-surface-elevated' />
          <div className='h-2.5 w-20 animate-pulse rounded bg-surface-elevated' />
        </div>
      </div>
    );
  }

  if (!currentMembership) {
    return (
      <Link
        href='/onboarding/create-workspace'
        className='flex min-h-[74px] items-center gap-3 rounded-xl border border-dashed border-[rgba(129,117,255,0.4)] bg-[rgba(109,93,251,0.08)] p-3 text-sm font-bold text-[#B6AFFF] transition-colors hover:bg-[rgba(109,93,251,0.14)]'
      >
        <Plus className='size-5' />
        Create your first workspace
      </Link>
    );
  }

  const currentWorkspace = currentMembership.workspace;
  const currentWorkspaceInitial = currentWorkspace.name.charAt(0).toUpperCase();

  return (
    <div ref={switcherRef} className='relative'>
      <button
        type='button'
        onClick={() => setIsOpen((currentValue) => !currentValue)}
        aria-label='Switch workspace'
        aria-expanded={isOpen}
        className='flex w-full items-center gap-3 rounded-xl border border-border bg-surface p-3 text-left transition-colors hover:bg-surface-elevated'
      >
        <span className='grid size-10 place-items-center rounded-lg bg-[rgba(109,93,251,0.18)] text-sm font-bold text-[#B6AFFF]'>
          {currentWorkspaceInitial}
        </span>

        <span className='min-w-0 flex-1'>
          <span className='block truncate text-sm font-bold text-text-primary'>
            {currentWorkspace.name}
          </span>

          <span className='mt-0.5 block text-xs text-text-muted'>
            {formatRole(currentMembership.role)} workspace
          </span>
        </span>

        <ChevronDown
          className={cn(
            'size-4 text-text-muted transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
        />
      </button>

      {isOpen ? (
        <div className='absolute left-0 right-0 top-[calc(100%+0.5rem)] z-50 overflow-hidden rounded-xl border border-border bg-surface shadow-[0_20px_60px_rgba(0,0,0,0.38)]'>
          <div className='border-b border-border px-3 py-2.5'>
            <p className='text-[11px] font-bold uppercase tracking-[0.14em] text-text-muted'>
              Your workspaces
            </p>
          </div>

          <div className='max-h-60 overflow-y-auto p-1.5'>
            {memberships.map((membership) => {
              const workspace = membership.workspace;
              const isCurrentWorkspace = workspace.id === currentWorkspace.id;

              return (
                <button
                  key={membership.id}
                  type='button'
                  onClick={() => {
                    selectWorkspace(workspace.id);
                    setIsOpen(false);
                  }}
                  className={cn(
                    'flex w-full items-center gap-3 rounded-lg p-2.5 text-left transition-colors',
                    isCurrentWorkspace
                      ? 'bg-[rgba(109,93,251,0.16)]'
                      : 'hover:bg-surface-elevated'
                  )}
                >
                  <span
                    className={cn(
                      'grid size-9 place-items-center rounded-lg text-xs font-bold',
                      isCurrentWorkspace
                        ? 'bg-[rgba(109,93,251,0.28)] text-[#C9C4FF]'
                        : 'bg-surface-elevated text-text-secondary'
                    )}
                  >
                    {workspace.name.charAt(0).toUpperCase()}
                  </span>

                  <span className='min-w-0 flex-1'>
                    <span className='block truncate text-sm font-bold text-text-primary'>
                      {workspace.name}
                    </span>

                    <span className='mt-0.5 block text-xs text-text-muted'>
                      {formatRole(membership.role)} workspace
                    </span>
                  </span>

                  {isCurrentWorkspace ? (
                    <Check className='size-4 shrink-0 text-[#B6AFFF]' />
                  ) : null}
                </button>
              );
            })}
          </div>

          <div className='border-t border-border p-1.5'>
            <Link
              href='/onboarding/create-workspace'
              onClick={() => setIsOpen(false)}
              className='flex items-center gap-2 rounded-lg px-2.5 py-2 text-sm font-bold text-[#B6AFFF] transition-colors hover:bg-[rgba(109,93,251,0.1)]'
            >
              <Plus className='size-4' />
              Create new workspace
            </Link>

            <button
              type='button'
              disabled
              className='mt-1 flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-left text-sm font-bold text-text-muted opacity-60'
            >
              <Settings2 className='size-4' />
              Manage workspaces
            </button>
          </div>
        </div>
      ) : null}

      {errorMessage ? (
        <p className='mt-2 text-xs font-medium text-danger'>{errorMessage}</p>
      ) : null}
    </div>
  );
}
