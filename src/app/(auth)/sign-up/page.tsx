'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { authClient } from '@/lib/auth-client';
import { signUpSchema, type SignUpInput } from '@/features/auth/auth.schema';

export default function SignUpPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<SignUpInput>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: SignUpInput) => {
    const { error } = await authClient.signUp.email({
      name: values.name,
      email: values.email,
      password: values.password,
    });

    if (error) {
      setError('root', {
        message: error.message ?? 'Unable to create your account.',
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
          <h1 className='text-2xl font-bold'>Create your TaskFlow account</h1>
          <p className='mt-1 text-sm text-gray-500'>
            Start managing your team tasks.
          </p>
        </div>

        <label className='block space-y-2'>
          <span className='text-sm font-medium'>Name</span>

          <input
            type='text'
            autoComplete='name'
            placeholder='Your name'
            {...register('name')}
            className='w-full rounded-md border px-3 py-2 outline-none focus:ring-2'
          />

          {errors.name ? (
            <p className='text-sm text-red-600'>{errors.name.message}</p>
          ) : null}
        </label>

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
            autoComplete='new-password'
            placeholder='Minimum 8 characters'
            {...register('password')}
            className='w-full rounded-md border px-3 py-2 outline-none focus:ring-2'
          />

          {errors.password ? (
            <p className='text-sm text-red-600'>{errors.password.message}</p>
          ) : null}
        </label>

        {errors.root ? (
          <p className='text-sm text-red-600'>{errors.root.message}</p>
        ) : null}

        <button
          type='submit'
          disabled={isSubmitting}
          className='w-full rounded-md bg-black px-4 py-2 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60'
        >
          {isSubmitting ? 'Creating account...' : 'Create account'}
        </button>
      </form>
    </main>
  );
}
