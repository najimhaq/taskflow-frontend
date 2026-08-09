'use client';

import type { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ChevronDown,
  ChevronLeft,
  CircleCheckBig,
  FolderKanban,
  LayoutDashboard,
  Plus,
  Settings,
  UsersRound,
  X,
} from 'lucide-react';

import { Logo } from '@/components/shared/logo';
import { cn } from '@/lib/utils';

type NavigationItem = {
  label: string;
  href: string;
  icon: LucideIcon;
  available: boolean;
};

type DashboardSidebarProps = {
  isMobileOpen: boolean;
  onClose: () => void;
};

const navigationItems: NavigationItem[] = [
  {
    label: 'Overview',
    href: '/dashboard',
    icon: LayoutDashboard,
    available: true,
  },
  {
    label: 'My tasks',
    href: '/my-tasks',
    icon: CircleCheckBig,
    available: false,
  },
  {
    label: 'Projects',
    href: '/projects',
    icon: FolderKanban,
    available: false,
  },
  {
    label: 'Team members',
    href: '/members',
    icon: UsersRound,
    available: false,
  },
];

export function DashboardSidebar({
  isMobileOpen,
  onClose,
}: DashboardSidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {isMobileOpen ? (
        <button
          type='button'
          aria-label='Close sidebar overlay'
          onClick={onClose}
          className='fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden'
        />
      ) : null}

      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-border bg-[#0D1425] transition-transform duration-300 lg:translate-x-0',
          isMobileOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className='flex h-20 items-center justify-between px-5'>
          <Logo showTagline />

          <button
            type='button'
            onClick={onClose}
            aria-label='Close sidebar'
            className='grid size-9 place-items-center rounded-lg text-text-muted transition-colors hover:bg-surface hover:text-text-primary lg:hidden'
          >
            <X className='size-5' />
          </button>
        </div>

        <div className='px-4'>
          <button
            type='button'
            disabled
            title='Workspace switcher will be available soon'
            className='flex w-full items-center gap-3 rounded-xl border border-border bg-surface p-3 text-left opacity-80'
          >
            <span className='grid size-9 place-items-center rounded-lg bg-[rgba(109,93,251,0.18)] text-sm font-bold text-[#B6AFFF]'>
              T
            </span>

            <span className='min-w-0 flex-1'>
              <span className='block truncate text-sm font-bold text-text-primary'>
                My workspace
              </span>
              <span className='mt-0.5 block text-xs text-text-muted'>
                Personal workspace
              </span>
            </span>

            <ChevronDown className='size-4 text-text-muted' />
          </button>
        </div>

        <nav className='mt-7 flex-1 px-4'>
          <p className='px-2 text-[11px] font-bold uppercase tracking-[0.14em] text-text-muted'>
            Workspace
          </p>

          <div className='mt-3 space-y-1'>
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              if (!item.available) {
                return (
                  <button
                    key={item.label}
                    type='button'
                    disabled
                    title={`${item.label} is coming soon`}
                    className='flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-semibold text-text-muted opacity-55'
                  >
                    <Icon className='size-[18px]' />
                    {item.label}

                    <span className='ml-auto rounded bg-surface px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-text-muted'>
                      Soon
                    </span>
                  </button>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold transition-all',
                    isActive
                      ? 'bg-[rgba(109,93,251,0.16)] text-[#B6AFFF]'
                      : 'text-text-secondary hover:bg-surface hover:text-text-primary'
                  )}
                >
                  <Icon className='size-[18px]' />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>

        <div className='border-t border-border p-4'>
          <button
            type='button'
            disabled
            title='Workspace creation will be available soon'
            className='flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-[rgba(129,117,255,0.35)] px-3 py-2.5 text-sm font-bold text-[#B6AFFF] transition-colors hover:bg-[rgba(109,93,251,0.1)]'
          >
            <Plus className='size-4' />
            New workspace
          </button>

          <button
            type='button'
            disabled
            title='Settings will be available soon'
            className='mt-3 flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold text-text-muted opacity-55'
          >
            <Settings className='size-[18px]' />
            Settings
          </button>

          <Link
            href='/'
            className='mt-2 flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold text-text-secondary transition-colors hover:bg-surface hover:text-text-primary'
          >
            <ChevronLeft className='size-[18px]' />
            Back to website
          </Link>
        </div>
      </aside>
    </>
  );
}
