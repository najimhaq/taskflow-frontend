'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { AxiosError } from 'axios';
import {
  ArrowRight,
  CheckCircle2,
  CircleHelp,
  Sparkles,
  UsersRound,
} from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  createWorkspaceSchema,
  type CreateWorkspaceInput,
} from '@/features/workspace/workspace.schema';
import { apiClient } from '@/lib/api-client';

type ApiErrorResponse = {
  success: false;
  message?: string;
  errors?: Record<string, string[] | undefined>;
};

function createSlug(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/[\s-]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60);
}

export function CreateWorkspaceForm() {
  const router = useRouter();

  const [isSlugManuallyEdited, setIsSlugManuallyEdited] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<CreateWorkspaceInput>({
    resolver: zodResolver(createWorkspaceSchema),
    defaultValues: {
      name: '',
      slug: '',
      description: '',
    },
  });

  const handleWorkspaceNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const nextName = event.target.value;

    if (!isSlugManuallyEdited) {
      setValue('slug', createSlug(nextName), {
        shouldValidate: true,
      });
    }
  };

  const onSubmit = async (values: CreateWorkspaceInput) => {
    try {
      await apiClient.post('/api/workspaces', {
        name: values.name,
        slug: values.slug,
        ...(values.description ? { description: values.description } : {}),
      });

      window.location.replace('/dashboard');
    } catch (error) {
      if (error instanceof AxiosError) {
        const responseData = error.response?.data as
          | ApiErrorResponse
          | undefined;

        const slugError = responseData?.errors?.slug?.[0];

        if (slugError) {
          setError('slug', {
            message: slugError,
          });

          return;
        }

        setError('root', {
          message:
            responseData?.message ??
            'Unable to create your workspace. Please try again.',
        });

        return;
      }

      setError('root', {
        message: 'Something went wrong. Please try again.',
      });
    }
  };

  return (
    <div className='w-full max-w-xl'>
      <div className='rounded-3xl border border-border bg-surface/90 p-6 shadow-[0_28px_90px_rgba(0,0,0,0.28)] backdrop-blur-sm sm:p-8'>
        <div className='grid size-12 place-items-center rounded-2xl border border-[rgba(129,117,255,0.3)] bg-[rgba(109,93,251,0.16)] text-[#C9C4FF] shadow-[0_0_32px_rgba(109,93,251,0.18)]'>
          <Sparkles className='size-5' />
        </div>

        <div className='mt-7'>
          <p className='text-sm font-bold uppercase tracking-[0.16em] text-accent'>
            Let&apos;s get started
          </p>

          <h1 className='mt-3 text-3xl font-bold tracking-[-0.05em] text-text-primary sm:text-4xl'>
            Create your first workspace.
          </h1>

          <p className='mt-3 max-w-lg text-sm leading-6 text-text-secondary'>
            A workspace is where your team&apos;s projects, tasks, and progress
            live together.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className='mt-8 space-y-5'>
          <label className='block space-y-2'>
            <span className='text-sm font-semibold text-text-primary'>
              Workspace name
            </span>

            <Input
              type='text'
              placeholder='e.g. Acme product team'
              autoComplete='organization'
              hasError={Boolean(errors.name)}
              {...register('name', {
                onChange: handleWorkspaceNameChange,
              })}
            />

            {errors.name ? (
              <p className='text-xs font-medium text-danger'>
                {errors.name.message}
              </p>
            ) : (
              <p className='text-xs text-text-muted'>
                Use your team, company, or personal workspace name.
              </p>
            )}
          </label>

          <label className='block space-y-2'>
            <span className='flex items-center gap-1.5 text-sm font-semibold text-text-primary'>
              Workspace URL
              <CircleHelp
                className='size-3.5 text-text-muted'
                aria-label='This unique URL identifies your workspace'
              />
            </span>

            <div
              className={`flex h-11 overflow-hidden rounded-xl border bg-[#0D1425] transition-all duration-200 ${
                errors.slug
                  ? 'border-danger ring-4 ring-[rgba(251,113,133,0.14)]'
                  : 'border-border focus-within:border-primary focus-within:ring-4 focus-within:ring-[rgba(109,93,251,0.14)]'
              }`}
            >
              <span className='flex items-center border-r border-border px-3 text-xs font-medium text-text-muted'>
                taskflow/
              </span>

              <input
                type='text'
                placeholder='acme-team'
                autoCapitalize='none'
                autoCorrect='off'
                spellCheck={false}
                className='min-w-0 flex-1 bg-transparent px-3 text-sm text-text-primary outline-none placeholder:text-text-muted'
                {...register('slug', {
                  onChange: () => setIsSlugManuallyEdited(true),
                })}
              />
            </div>

            {errors.slug ? (
              <p className='text-xs font-medium text-danger'>
                {errors.slug.message}
              </p>
            ) : (
              <p className='text-xs text-text-muted'>
                Lowercase letters, numbers, and hyphens only.
              </p>
            )}
          </label>

          <label className='block space-y-2'>
            <span className='text-sm font-semibold text-text-primary'>
              Description{' '}
              <span className='font-medium text-text-muted'>(optional)</span>
            </span>

            <textarea
              rows={3}
              placeholder='What does this workspace help your team accomplish?'
              className={`w-full resize-none rounded-xl border bg-[#0D1425] px-3.5 py-3 text-sm text-text-primary outline-none placeholder:text-text-muted transition-all duration-200 ${
                errors.description
                  ? 'border-danger focus:ring-4 focus:ring-[rgba(251,113,133,0.14)]'
                  : 'border-border focus:border-primary focus:ring-4 focus:ring-[rgba(109,93,251,0.14)]'
              }`}
              {...register('description')}
            />

            {errors.description ? (
              <p className='text-xs font-medium text-danger'>
                {errors.description.message}
              </p>
            ) : null}
          </label>

          {errors.root ? (
            <div
              role='alert'
              className='rounded-xl border border-[rgba(251,113,133,0.35)] bg-[rgba(251,113,133,0.1)] px-3.5 py-3 text-sm font-medium text-[#FDA4AF]'
            >
              {errors.root.message}
            </div>
          ) : null}

          <Button
            type='submit'
            size='lg'
            isLoading={isSubmitting}
            className='mt-2 w-full'
          >
            Create workspace
            <ArrowRight className='size-4' />
          </Button>
        </form>

        <div className='mt-8 border-t border-border pt-5'>
          <p className='flex items-center gap-2 text-xs text-text-muted'>
            <UsersRound className='size-4 text-accent' />
            You&apos;ll be the owner and can invite teammates later.
          </p>

          <p className='mt-3 flex items-center gap-2 text-xs text-text-muted'>
            <CheckCircle2 className='size-4 text-success' />
            Your workspace is private until you invite members.
          </p>
        </div>
      </div>
    </div>
  );
}
