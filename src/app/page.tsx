import Link from 'next/link';
import {
  ArrowRight,
  Check,
  CheckCircle2,
  CircleDotDashed,
  Clock3,
  Command,
  KanbanSquare,
  Layers3,
  MessageSquareText,
  Plus,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from 'lucide-react';

import { LandingNavbar } from '@/components/shared/landing-navbar';

const features = [
  {
    icon: KanbanSquare,
    title: 'Visual task planning',
    description:
      'Turn ambitious ideas into clear, actionable tasks with a focused board your whole team understands.',
  },
  {
    icon: UsersRound,
    title: 'Built for collaboration',
    description:
      'Bring projects, teammates, priorities, and conversations into one calm, shared workspace.',
  },
  {
    icon: CircleDotDashed,
    title: 'Progress without the noise',
    description:
      'Know what is moving, blocked, or complete without chasing updates across multiple tools.',
  },
] as const;

const workflowSteps = [
  {
    number: '01',
    title: 'Create a workspace',
    description:
      'Give every team a focused home for the projects and work that matter.',
  },
  {
    number: '02',
    title: 'Plan the work',
    description:
      'Break projects into tasks, define priorities, and assign clear ownership.',
  },
  {
    number: '03',
    title: 'Move work forward',
    description:
      'Keep everyone aligned with a visual workflow that turns progress into momentum.',
  },
] as const;

export default function AppMainPage() {
  return (
    <div className='min-h-screen bg-canvas'>
      <LandingNavbar />

      <main>
        <section className='relative isolate overflow-hidden'>
          <div
            aria-hidden='true'
            className='absolute inset-x-0 top-0 -z-10 h-[620px] bg-[radial-gradient(circle_at_50%_-15%,rgba(109,93,251,0.32),transparent_46%),radial-gradient(circle_at_85%_22%,rgba(34,211,238,0.13),transparent_26%)]'
          />

          <div className='mx-auto max-w-7xl px-5 pb-20 pt-20 sm:px-8 sm:pt-28 lg:pb-28 lg:pt-32'>
            <div className='mx-auto max-w-4xl text-center'>
              <div className='inline-flex items-center gap-2 rounded-full border border-[rgba(129,117,255,0.35)] bg-[rgba(109,93,251,0.12)] px-3 py-1.5 text-xs font-semibold text-[#C9C4FF]'>
                <Sparkles className='size-3.5' />
                Designed for high-performing teams
              </div>

              <h1 className='mt-7 text-4xl font-bold tracking-[-0.06em] text-text-primary sm:text-6xl lg:text-7xl'>
                Work moves faster when{' '}
                <span className='bg-gradient-to-r from-[#A59BFF] via-[#8CDDF3] to-[#C9C4FF] bg-clip-text text-transparent'>
                  everything flows.
                </span>
              </h1>

              <p className='mx-auto mt-6 max-w-2xl text-base leading-7 text-text-secondary sm:text-lg'>
                TaskFlow gives your team one focused workspace to plan projects,
                collaborate with clarity, and ship meaningful work—without the
                chaos.
              </p>

              <div className='mt-9 flex flex-col justify-center gap-3 sm:flex-row'>
                <Link
                  href='/sign-up'
                  className='inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-[0_12px_30px_rgba(109,93,251,0.32)]'
                >
                  Start for free
                  <ArrowRight className='size-4' />
                </Link>

                <a
                  href='#features'
                  className='inline-flex items-center justify-center rounded-xl border border-border bg-surface/70 px-5 py-3 text-sm font-bold text-text-primary transition-colors hover:bg-surface-elevated'
                >
                  Explore TaskFlow
                </a>
              </div>

              <div className='mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-medium text-text-muted'>
                <span className='inline-flex items-center gap-1.5'>
                  <Check className='size-3.5 text-success' />
                  No credit card required
                </span>
                <span className='inline-flex items-center gap-1.5'>
                  <Check className='size-3.5 text-success' />
                  Set up in minutes
                </span>
                <span className='inline-flex items-center gap-1.5'>
                  <Check className='size-3.5 text-success' />
                  Built for growing teams
                </span>
              </div>
            </div>

            <ProductPreview />
          </div>
        </section>

        <section
          id='features'
          className='scroll-mt-24 border-y border-border/70 bg-surface/35'
        >
          <div className='mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28'>
            <div className='max-w-2xl'>
              <p className='text-sm font-bold uppercase tracking-[0.16em] text-accent'>
                Less context switching
              </p>

              <h2 className='mt-4 text-3xl font-bold tracking-[-0.045em] text-text-primary sm:text-4xl'>
                Everything your team needs to turn plans into progress.
              </h2>

              <p className='mt-4 text-base leading-7 text-text-secondary'>
                TaskFlow brings the essentials together, so your team can spend
                less time managing work and more time moving it forward.
              </p>
            </div>

            <div className='mt-12 grid gap-4 md:grid-cols-3'>
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <article
                    key={feature.title}
                    className='rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(129,117,255,0.55)] hover:bg-surface-elevated'
                  >
                    <span className='grid size-11 place-items-center rounded-xl bg-[rgba(109,93,251,0.15)] text-[#A59BFF]'>
                      <Icon className='size-5' />
                    </span>

                    <h3 className='mt-6 text-lg font-bold text-text-primary'>
                      {feature.title}
                    </h3>

                    <p className='mt-3 text-sm leading-6 text-text-secondary'>
                      {feature.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id='how-it-works' className='scroll-mt-24'>
          <div className='mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28'>
            <div className='grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20'>
              <div className='lg:sticky lg:top-28'>
                <p className='text-sm font-bold uppercase tracking-[0.16em] text-accent'>
                  A better workflow
                </p>

                <h2 className='mt-4 text-3xl font-bold tracking-[-0.045em] text-text-primary sm:text-4xl'>
                  Clarity at every step of the work.
                </h2>

                <p className='mt-5 max-w-xl text-base leading-7 text-text-secondary'>
                  From the first idea to the final delivery, TaskFlow creates a
                  workflow your team can trust.
                </p>

                <Link
                  href='/sign-up'
                  className='mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#A59BFF] transition-colors hover:text-[#C9C4FF]'
                >
                  Build your workspace
                  <ArrowRight className='size-4' />
                </Link>
              </div>

              <div className='space-y-4'>
                {workflowSteps.map((step) => (
                  <article
                    key={step.number}
                    className='group rounded-2xl border border-border bg-surface p-6 sm:flex sm:items-start sm:gap-6'
                  >
                    <span className='font-mono text-sm font-bold text-accent'>
                      {step.number}
                    </span>

                    <div className='mt-4 sm:mt-0'>
                      <h3 className='text-xl font-bold text-text-primary'>
                        {step.title}
                      </h3>

                      <p className='mt-2 max-w-xl text-sm leading-6 text-text-secondary'>
                        {step.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id='for-teams' className='scroll-mt-24'>
          <div className='mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:pb-28'>
            <div className='relative overflow-hidden rounded-3xl border border-[rgba(129,117,255,0.35)] bg-surface px-6 py-14 text-center sm:px-12 sm:py-20'>
              <div
                aria-hidden='true'
                className='absolute inset-0 -z-0 bg-[radial-gradient(circle_at_50%_0%,rgba(109,93,251,0.26),transparent_55%)]'
              />

              <div className='relative z-10 mx-auto max-w-2xl'>
                <span className='mx-auto grid size-12 place-items-center rounded-2xl bg-[rgba(109,93,251,0.22)] text-[#B6AFFF]'>
                  <Command className='size-6' />
                </span>

                <h2 className='mt-6 text-3xl font-bold tracking-[-0.045em] text-text-primary sm:text-4xl'>
                  The calm workspace your team has been looking for.
                </h2>

                <p className='mt-4 text-base leading-7 text-text-secondary'>
                  Create a workspace, invite your team, and start turning plans
                  into progress today.
                </p>

                <Link
                  href='/sign-up'
                  className='mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-[0_12px_30px_rgba(109,93,251,0.32)]'
                >
                  Create your workspace
                  <ArrowRight className='size-4' />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className='border-t border-border'>
        <div className='mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-8'>
          <p className='text-text-muted'>
            © {new Date().getFullYear()} TaskFlow. Built for focused teams.
          </p>

          <div className='flex items-center gap-5 text-text-secondary'>
            <Link
              href='/sign-in'
              className='transition-colors hover:text-text-primary'
            >
              Sign in
            </Link>
            <Link
              href='/sign-up'
              className='transition-colors hover:text-text-primary'
            >
              Get started
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ProductPreview() {
  return (
    <div className='relative mx-auto mt-16 max-w-6xl sm:mt-20'>
      <div
        aria-hidden='true'
        className='absolute -inset-4 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_50%_30%,rgba(109,93,251,0.24),transparent_62%)] blur-2xl'
      />

      <div className='overflow-hidden rounded-2xl border border-border bg-[#0E1528] shadow-[0_28px_100px_rgba(0,0,0,0.45)]'>
        <div className='flex items-center justify-between border-b border-border bg-surface px-4 py-3 sm:px-5'>
          <div className='flex items-center gap-2'>
            <span className='size-2.5 rounded-full bg-danger/80' />
            <span className='size-2.5 rounded-full bg-warning/80' />
            <span className='size-2.5 rounded-full bg-success/80' />
          </div>

          <p className='text-xs font-medium text-text-muted'>
            Design team workspace
          </p>

          <div className='w-12' />
        </div>

        <div className='grid min-h-[420px] grid-cols-[56px_1fr] sm:grid-cols-[190px_1fr]'>
          <aside className='border-r border-border bg-[#0D1425] p-3 sm:p-4'>
            <div className='hidden sm:block'>
              <p className='px-2 text-[11px] font-bold uppercase tracking-[0.14em] text-text-muted'>
                Workspace
              </p>

              <div className='mt-4 space-y-1'>
                <PreviewSidebarItem label='Overview' active />
                <PreviewSidebarItem label='My tasks' />
                <PreviewSidebarItem label='Projects' />
              </div>

              <p className='mt-7 px-2 text-[11px] font-bold uppercase tracking-[0.14em] text-text-muted'>
                Teams
              </p>

              <div className='mt-4 space-y-1'>
                <PreviewSidebarItem label='Product design' />
                <PreviewSidebarItem label='Engineering' />
              </div>
            </div>

            <div className='flex flex-col items-center gap-5 sm:hidden'>
              <Layers3 className='size-4 text-[#A59BFF]' />
              <KanbanSquare className='size-4 text-text-secondary' />
              <UsersRound className='size-4 text-text-secondary' />
            </div>
          </aside>

          <div className='overflow-hidden p-4 sm:p-6'>
            <div className='flex items-start justify-between gap-4'>
              <div>
                <p className='text-xs font-medium text-text-muted'>
                  Projects / Website refresh
                </p>
                <h3 className='mt-1 text-lg font-bold tracking-[-0.03em] text-text-primary sm:text-xl'>
                  Website refresh sprint
                </h3>
              </div>

              <button
                type='button'
                className='inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-primary px-2.5 py-2 text-xs font-bold text-white'
              >
                <Plus className='size-3.5' />
                <span className='hidden sm:inline'>New task</span>
              </button>
            </div>

            <div className='mt-6 grid min-w-[560px] grid-cols-3 gap-3 sm:gap-4'>
              <PreviewColumn
                title='To do'
                count='3'
                cards={[
                  {
                    title: 'Finalize landing page structure',
                    tag: 'Design',
                    icon: Clock3,
                    tone: 'blue',
                  },
                  {
                    title: 'Write homepage copy',
                    tag: 'Content',
                    icon: MessageSquareText,
                    tone: 'purple',
                  },
                ]}
              />

              <PreviewColumn
                title='In progress'
                count='2'
                cards={[
                  {
                    title: 'Build responsive navigation',
                    tag: 'Frontend',
                    icon: CircleDotDashed,
                    tone: 'cyan',
                  },
                  {
                    title: 'Prepare component library',
                    tag: 'System',
                    icon: Layers3,
                    tone: 'purple',
                  },
                ]}
              />

              <PreviewColumn
                title='Done'
                count='4'
                cards={[
                  {
                    title: 'Define product direction',
                    tag: 'Planning',
                    icon: CheckCircle2,
                    tone: 'green',
                  },
                  {
                    title: 'Create project workspace',
                    tag: 'Setup',
                    icon: ShieldCheck,
                    tone: 'green',
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type PreviewSidebarItemProps = {
  label: string;
  active?: boolean;
};

function PreviewSidebarItem({
  label,
  active = false,
}: PreviewSidebarItemProps) {
  return (
    <div
      className={`rounded-md px-2 py-2 text-xs font-medium ${
        active
          ? 'bg-[rgba(109,93,251,0.16)] text-[#B6AFFF]'
          : 'text-text-secondary'
      }`}
    >
      {label}
    </div>
  );
}

type PreviewCard = {
  title: string;
  tag: string;
  icon: typeof Clock3;
  tone: 'blue' | 'cyan' | 'green' | 'purple';
};

type PreviewColumnProps = {
  title: string;
  count: string;
  cards: PreviewCard[];
};

function PreviewColumn({ title, count, cards }: PreviewColumnProps) {
  return (
    <div>
      <div className='mb-3 flex items-center justify-between'>
        <p className='text-xs font-bold text-text-secondary'>{title}</p>
        <span className='grid size-5 place-items-center rounded bg-surface-elevated text-[10px] font-bold text-text-muted'>
          {count}
        </span>
      </div>

      <div className='space-y-3'>
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <article
              key={card.title}
              className='rounded-xl border border-border bg-surface p-3 shadow-sm'
            >
              <p className='text-xs font-semibold leading-5 text-text-primary'>
                {card.title}
              </p>

              <div className='mt-4 flex items-center justify-between'>
                <span
                  className={`rounded px-1.5 py-1 text-[10px] font-bold ${
                    card.tone === 'green'
                      ? 'bg-[rgba(34,197,94,0.13)] text-[#6EE7A0]'
                      : card.tone === 'cyan'
                        ? 'bg-[rgba(34,211,238,0.12)] text-[#7DE9F8]'
                        : card.tone === 'blue'
                          ? 'bg-[rgba(56,189,248,0.12)] text-[#7DD3FC]'
                          : 'bg-[rgba(109,93,251,0.14)] text-[#B6AFFF]'
                  }`}
                >
                  {card.tag}
                </span>

                <Icon className='size-3.5 text-text-muted' />
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
