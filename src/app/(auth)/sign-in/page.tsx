'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { signInSchema, type SignInInput } from '@/features/auth/auth.schema';
import { authClient } from '@/lib/auth-client';

export default function SignInPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<SignInInput>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: true,
    },
  });

  const onSubmit = async (values: SignInInput) => {
    const { error } = await authClient.signIn.email({
      email: values.email,
      password: values.password,
      rememberMe: values.rememberMe,
    });

    if (error) {
      setError('root', {
        message: error.message ?? 'Invalid email or password.',
      });

      return;
    }

    router.replace('/dashboard');
    router.refresh();
  };

  return (
    <main className='mx-auto flex min-h-screen max-w-md items-center px-6'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-full space-y-5 rounded-xl border p-6 shadow-sm'
      >
        <div>
          <h1 className='text-2xl font-bold'>Welcome back</h1>
          <p className='mt-1 text-sm text-gray-500'>
            Sign in to your TaskFlow workspace.
          </p>
        </div>

        <label className='block space-y-2'>
          <span className='text-sm font-medium'>Email</span>

          <input
            type='email'
            autoComplete='email'
            placeholder='you@example.com'
            {...register('email')}
            className='w-full rounded-md border px-3 py-2 outline-none focus:ring-2'
          />

          {errors.email ? (
            <p className='text-sm text-red-600'>{errors.email.message}</p>
          ) : null}
        </label>

        <label className='block space-y-2'>
          <span className='text-sm font-medium'>Password</span>

          <input
            type='password'
            autoComplete='current-password'
            placeholder='Your password'
            {...register('password')}
            className='w-full rounded-md border px-3 py-2 outline-none focus:ring-2'
          />

          {errors.password ? (
            <p className='text-sm text-red-600'>{errors.password.message}</p>
          ) : null}
        </label>

        <label className='flex items-center gap-2 text-sm'>
          <input type='checkbox' {...register('rememberMe')} />
          Remember me on this device
        </label>

        {errors.root ? (
          <p className='text-sm text-red-600'>{errors.root.message}</p>
        ) : null}

        <button
          type='submit'
          disabled={isSubmitting}
          className='w-full rounded-md bg-black px-4 py-2 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60'
        >
          {isSubmitting ? 'Signing in...' : 'Sign in'}
        </button>

        <p className='text-center text-sm text-gray-600'>
          New to TaskFlow?{' '}
          <Link href='/sign-up' className='font-medium text-black underline'>
            Create an account
          </Link>
        </p>
      </form>
    </main>
  );
}
