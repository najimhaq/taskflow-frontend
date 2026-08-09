import type { ReactNode } from 'react';

import { DashboardAuthGuard } from '@/components/dashboard/dashboard-auth-guard';
import { DashboardShell } from '@/components/dashboard/dashboard-shell';

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <DashboardAuthGuard>
      <DashboardShell>{children}</DashboardShell>
    </DashboardAuthGuard>
  );
}
