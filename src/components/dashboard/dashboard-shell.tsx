'use client';

import type { ReactNode } from 'react';
import { useState } from 'react';

import { WorkspaceProvider } from '@/features/workspace/workspace-provider';

import { DashboardSidebar } from './dashboard-sidebar';
import { DashboardTopbar } from './dashboard-topbar';

type DashboardShellProps = {
  children: ReactNode;
};

export function DashboardShell({ children }: DashboardShellProps) {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <WorkspaceProvider>
      <div className='min-h-screen bg-canvas'>
        <DashboardSidebar
          isMobileOpen={isMobileSidebarOpen}
          onClose={() => setIsMobileSidebarOpen(false)}
        />

        <div className='min-h-screen lg:pl-72'>
          <DashboardTopbar onOpenSidebar={() => setIsMobileSidebarOpen(true)} />

          <main className='mx-auto w-full max-w-[1600px] p-5 sm:p-8'>
            {children}
          </main>
        </div>
      </div>
    </WorkspaceProvider>
  );
}
