import type { LucideIcon } from 'lucide-react';
import {
  ArrowUpRight,
  CheckCircle2,
  CircleDotDashed,
  Clock3,
  FolderKanban,
  MoreHorizontal,
  Plus,
  TrendingUp,
  UsersRound,
} from 'lucide-react';
import { DashboardWorkspaceGuard } from '@/components/dashboard/dashboard-workspace-guard';

type StatCard = {
  label: string;
  value: string;
  helperText: string;
  icon: LucideIcon;
  tone: 'primary' | 'cyan' | 'green' | 'amber';
};

type Task = {
  title: string;
  project: string;
  priority: 'High' | 'Medium' | 'Low';
  dueDate: string;
  status: 'To do' | 'In progress' | 'Review';
};

type Project = {
  name: string;
  progress: number;
  tasksDone: number;
  totalTasks: number;
  color: string;
};

const statCards: StatCard[] = [
  {
    label: 'My open tasks',
    value: '12',
    helperText: '3 due this week',
    icon: CircleDotDashed,
    tone: 'primary',
  },
  {
    label: 'In progress',
    value: '5',
    helperText: 'Moving forward',
    icon: TrendingUp,
    tone: 'cyan',
  },
  {
    label: 'Completed',
    value: '24',
    helperText: 'This month',
    icon: CheckCircle2,
    tone: 'green',
  },
  {
    label: 'Team members',
    value: '4',
    helperText: 'In your workspace',
    icon: UsersRound,
    tone: 'amber',
  },
];

const priorityTasks: Task[] = [
  {
    title: 'Finalize TaskFlow dashboard layout',
    project: 'TaskFlow product',
    priority: 'High',
    dueDate: 'Today',
    status: 'In progress',
  },
  {
    title: 'Create workspace database schema',
    project: 'Backend architecture',
    priority: 'High',
    dueDate: 'Tomorrow',
    status: 'To do',
  },
  {
    title: 'Review authentication flow',
    project: 'TaskFlow product',
    priority: 'Medium',
    dueDate: 'Aug 12',
    status: 'Review',
  },
  {
    title: 'Prepare project documentation',
    project: 'Development',
    priority: 'Low',
    dueDate: 'Aug 14',
    status: 'To do',
  },
];

const projects: Project[] = [
  {
    name: 'TaskFlow product',
    progress: 68,
    tasksDone: 17,
    totalTasks: 25,
    color: '#6D5DFB',
  },
  {
    name: 'Backend architecture',
    progress: 42,
    tasksDone: 8,
    totalTasks: 19,
    color: '#22D3EE',
  },
  {
    name: 'Design system',
    progress: 84,
    tasksDone: 21,
    totalTasks: 25,
    color: '#22C55E',
  },
];

export default function DashboardPage() {
  return (
    <DashboardWorkspaceGuard>
      <div className='space-y-8'>
        <section className='flex flex-col justify-between gap-5 sm:flex-row sm:items-end'>
          <div>
            <p className='text-sm font-semibold text-accent'>Overview</p>

            <h2 className='mt-2 text-3xl font-bold tracking-[-0.05em] text-text-primary'>
              Your work, in flow.
            </h2>

            <p className='mt-2 text-sm text-text-secondary'>
              Here is a clear view of what needs your attention today.
            </p>
          </div>

          <button
            type='button'
            disabled
            title='Task creation will be available after workspace setup'
            className='inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-primary px-4 text-sm font-bold text-white opacity-70'
          >
            <Plus className='size-4' />
            Create task
          </button>
        </section>

        <section className='grid gap-4 sm:grid-cols-2 xl:grid-cols-4'>
          {statCards.map((stat) => {
            const Icon = stat.icon;

            const toneClasses = {
              primary: 'bg-[rgba(109,93,251,0.15)] text-[#B6AFFF]',
              cyan: 'bg-[rgba(34,211,238,0.12)] text-[#7DE9F8]',
              green: 'bg-[rgba(34,197,94,0.12)] text-[#6EE7A0]',
              amber: 'bg-[rgba(245,158,11,0.12)] text-[#FCD34D]',
            } as const;

            return (
              <article
                key={stat.label}
                className='rounded-2xl border border-border bg-surface p-5'
              >
                <div className='flex items-start justify-between'>
                  <p className='text-sm font-semibold text-text-secondary'>
                    {stat.label}
                  </p>

                  <span
                    className={`grid size-9 place-items-center rounded-xl ${toneClasses[stat.tone]}`}
                  >
                    <Icon className='size-[18px]' />
                  </span>
                </div>

                <p className='mt-6 text-3xl font-bold tracking-[-0.04em] text-text-primary'>
                  {stat.value}
                </p>

                <p className='mt-1 text-xs font-medium text-text-muted'>
                  {stat.helperText}
                </p>
              </article>
            );
          })}
        </section>

        <section className='grid gap-5 xl:grid-cols-[1.5fr_1fr]'>
          <article className='overflow-hidden rounded-2xl border border-border bg-surface'>
            <div className='flex items-center justify-between border-b border-border px-5 py-4'>
              <div>
                <h3 className='font-bold text-text-primary'>Priority tasks</h3>
                <p className='mt-1 text-xs text-text-muted'>
                  Focus on the work that moves things forward.
                </p>
              </div>

              <button
                type='button'
                disabled
                className='rounded-lg px-2 py-1 text-xs font-bold text-text-muted'
              >
                View all
              </button>
            </div>

            <div className='divide-y divide-border'>
              {priorityTasks.map((task) => (
                <article
                  key={task.title}
                  className='flex items-center gap-3 px-5 py-4 transition-colors hover:bg-surface-elevated'
                >
                  <span
                    className={`size-2 rounded-full ${
                      task.priority === 'High'
                        ? 'bg-danger'
                        : task.priority === 'Medium'
                          ? 'bg-warning'
                          : 'bg-info'
                    }`}
                  />

                  <div className='min-w-0 flex-1'>
                    <p className='truncate text-sm font-bold text-text-primary'>
                      {task.title}
                    </p>

                    <p className='mt-1 text-xs text-text-muted'>
                      {task.project}
                    </p>
                  </div>

                  <div className='hidden text-right sm:block'>
                    <p className='text-xs font-bold text-text-secondary'>
                      {task.dueDate}
                    </p>

                    <p className='mt-1 text-[10px] font-semibold text-text-muted'>
                      {task.status}
                    </p>
                  </div>

                  <MoreHorizontal className='size-4 shrink-0 text-text-muted' />
                </article>
              ))}
            </div>
          </article>

          <article className='rounded-2xl border border-border bg-surface p-5'>
            <div className='flex items-center justify-between'>
              <div>
                <h3 className='font-bold text-text-primary'>Your projects</h3>
                <p className='mt-1 text-xs text-text-muted'>
                  Keep an eye on delivery progress.
                </p>
              </div>

              <FolderKanban className='size-5 text-accent' />
            </div>

            <div className='mt-6 space-y-5'>
              {projects.map((project) => (
                <div key={project.name}>
                  <div className='flex items-center justify-between gap-3'>
                    <p className='truncate text-sm font-bold text-text-primary'>
                      {project.name}
                    </p>

                    <span className='text-xs font-bold text-text-secondary'>
                      {project.progress}%
                    </span>
                  </div>

                  <div className='mt-3 h-2 overflow-hidden rounded-full bg-[#0D1425]'>
                    <div
                      className='h-full rounded-full'
                      style={{
                        width: `${project.progress}%`,
                        backgroundColor: project.color,
                      }}
                    />
                  </div>

                  <p className='mt-2 text-xs text-text-muted'>
                    {project.tasksDone} of {project.totalTasks} tasks completed
                  </p>
                </div>
              ))}
            </div>

            <button
              type='button'
              disabled
              className='mt-7 flex w-full items-center justify-center gap-2 rounded-xl border border-border py-2.5 text-sm font-bold text-text-secondary opacity-70'
            >
              Explore projects
              <ArrowUpRight className='size-4' />
            </button>
          </article>
        </section>

        <section className='rounded-2xl border border-border bg-[linear-gradient(135deg,rgba(109,93,251,0.14),rgba(18,26,46,0.9)_48%,rgba(34,211,238,0.08))] p-6 sm:flex sm:items-center sm:justify-between'>
          <div>
            <div className='inline-flex items-center gap-2 text-sm font-bold text-[#C9C4FF]'>
              <Clock3 className='size-4' />
              Next up: Workspace setup
            </div>

            <h3 className='mt-3 text-xl font-bold text-text-primary'>
              Create your first workspace to unlock real collaboration.
            </h3>

            <p className='mt-2 max-w-2xl text-sm leading-6 text-text-secondary'>
              Next we will connect this dashboard with PostgreSQL, Prisma, and
              your actual TaskFlow workspace data.
            </p>
          </div>
        </section>
      </div>
    </DashboardWorkspaceGuard>
  );
}
