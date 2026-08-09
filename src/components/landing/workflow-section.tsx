import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type WorkflowStep = {
  number: string;
  title: string;
  description: string;
};

const workflowSteps: WorkflowStep[] = [
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
];

export function WorkflowSection() {
  return (
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
                className='group rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:border-[rgba(129,117,255,0.5)] hover:bg-surface-elevated sm:flex sm:items-start sm:gap-6'
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
  );
}
