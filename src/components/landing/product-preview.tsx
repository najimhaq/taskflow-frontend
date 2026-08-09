import {
  CheckCircle2,
  CircleDotDashed,
  Clock3,
  KanbanSquare,
  Layers3,
  MessageSquareText,
  Plus,
  ShieldCheck,
  UsersRound,
} from 'lucide-react';

type PreviewSidebarItemProps = {
  label: string;
  active?: boolean;
};

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

export function ProductPreview() {
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
