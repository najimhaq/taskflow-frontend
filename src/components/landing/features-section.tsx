import type { LucideIcon } from 'lucide-react';
import { CircleDotDashed, KanbanSquare, UsersRound } from 'lucide-react';

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const features: Feature[] = [
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
];

export function FeaturesSection() {
  return (
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
            TaskFlow brings the essentials together, so your team can spend less
            time managing work and more time moving it forward.
          </p>
        </div>

        <div className='mt-12 grid gap-4 md:grid-cols-3'>
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className='group rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(129,117,255,0.55)] hover:bg-surface-elevated hover:shadow-[0_16px_36px_rgba(0,0,0,0.18)]'
              >
                <span className='grid size-11 place-items-center rounded-xl bg-[rgba(109,93,251,0.15)] text-[#A59BFF] transition-transform duration-300 group-hover:scale-110'>
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
  );
}
