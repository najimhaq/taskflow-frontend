'use client';

import { useState } from 'react';
import {
  Bell,
  ChevronDown,
  LogOut,
  Menu,
  Search,
  UserRound,
} from 'lucide-react';

import { authClient } from '@/lib/auth-client';
import { useWorkspace } from '@/features/workspace/workspace-provider';

type DashboardTopbarProps = {
  onOpenSidebar: () => void;
};

export function DashboardTopbar({ onOpenSidebar }: DashboardTopbarProps) {
  const { data: session } = authClient.useSession();
  const { currentMembership, isLoading: isWorkspaceLoading } = useWorkspace();

  const workspaceName =
    currentMembership?.workspace.name ??
    (isWorkspaceLoading ? 'Loading workspace...' : 'No workspace');
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const userName = session?.user.name ?? 'TaskFlow user';
  const userEmail = session?.user.email ?? '';
  const userInitial = userName.charAt(0).toUpperCase();

  const handleSignOut = async () => {
    await authClient.signOut();

    window.location.replace('/sign-in');
  };

  return (
    <header className='sticky top-0 z-30 flex h-18 items-center justify-between border-b border-border bg-canvas/85 px-5 backdrop-blur-xl sm:px-8'>
      <div className='flex items-center gap-3'>
        <button
          type='button'
          onClick={onOpenSidebar}
          aria-label='Open sidebar'
          className='grid size-10 place-items-center rounded-xl border border-border bg-surface text-text-secondary transition-colors hover:bg-surface-elevated hover:text-text-primary lg:hidden'
        >
          <Menu className='size-5' />
        </button>

        <div>
          <p className='text-xs font-medium text-text-muted'>Workspace</p>

          <h1 className='max-w-44 truncate text-sm font-bold text-text-primary sm:max-w-xs'>
            {workspaceName}
          </h1>
        </div>
      </div>

      <div className='flex items-center gap-2 sm:gap-3'>
        <button
          type='button'
          disabled
          title='Global search is coming soon'
          className='hidden h-10 w-64 items-center gap-2 rounded-xl border border-border bg-surface px-3 text-left text-sm text-text-muted opacity-70 md:flex'
        >
          <Search className='size-4' />
          Search anything...
          <kbd className='ml-auto rounded border border-border bg-[#0D1425] px-1.5 py-0.5 text-[10px] font-semibold'>
            ⌘ K
          </kbd>
        </button>

        <button
          type='button'
          disabled
          title='Notifications are coming soon'
          className='relative grid size-10 place-items-center rounded-xl border border-border bg-surface text-text-secondary opacity-70 transition-colors hover:bg-surface-elevated hover:text-text-primary'
        >
          <Bell className='size-[18px]' />
          <span className='absolute right-2 top-2 size-1.5 rounded-full bg-primary' />
        </button>

        <div className='relative'>
          <button
            type='button'
            onClick={() => setIsUserMenuOpen((currentValue) => !currentValue)}
            aria-label='Open user menu'
            aria-expanded={isUserMenuOpen}
            className='flex items-center gap-2 rounded-xl border border-border bg-surface py-1.5 pl-1.5 pr-2 text-left transition-colors hover:bg-surface-elevated'
          >
            <span className='grid size-7 place-items-center rounded-lg bg-[rgba(109,93,251,0.2)] text-xs font-bold text-[#C9C4FF]'>
              {userInitial}
            </span>

            <span className='hidden max-w-28 sm:block'>
              <span className='block truncate text-xs font-bold text-text-primary'>
                {userName}
              </span>
              <span className='block truncate text-[10px] text-text-muted'>
                Account
              </span>
            </span>

            <ChevronDown className='hidden size-3.5 text-text-muted sm:block' />
          </button>

          {isUserMenuOpen ? (
            <div className='absolute right-0 top-[calc(100%+0.5rem)] w-64 rounded-xl border border-border bg-surface p-2 shadow-[0_18px_50px_rgba(0,0,0,0.32)]'>
              <div className='border-b border-border px-2.5 py-2.5'>
                <p className='truncate text-sm font-bold text-text-primary'>
                  {userName}
                </p>
                <p className='mt-0.5 truncate text-xs text-text-muted'>
                  {userEmail}
                </p>
              </div>

              <button
                type='button'
                disabled
                className='mt-2 flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-left text-sm font-semibold text-text-muted opacity-60'
              >
                <UserRound className='size-4' />
                Account settings
              </button>

              <button
                type='button'
                onClick={handleSignOut}
                className='mt-1 flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-left text-sm font-semibold text-danger transition-colors hover:bg-[rgba(251,113,133,0.1)]'
              >
                <LogOut className='size-4' />
                Sign out
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
