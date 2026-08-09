'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { authClient } from '@/lib/auth-client';
import { HashLoader } from 'react-spinners';
import { apiClient } from '@/lib/api-client';

export default function DashboardPage() {
  const router = useRouter();

  const { data: session, isPending, error } = authClient.useSession();

  useEffect(() => {
    if (!isPending && (error || !session)) {
      router.replace('/sign-in');
    }
  }, [error, isPending, router, session]);


  const handleGetProfile = async () => {
    try {
      const response = await apiClient.get('/api/profile/me');

      console.log('Protected profile response:', response.data);
    } catch (requestError) {
      console.error('Protected profile request failed:', requestError);
    }
  };
  const handleSignOut = async () => {
    await authClient.signOut();

    window.location.replace('/sign-in');
  };

  if (isPending) {
    return (
      <main className='grid min-h-screen place-items-center'>
        <HashLoader />
      </main>
    );
  }

  if (error || !session) {
    return (
      <main className='grid min-h-screen place-items-center'>
        Redirecting to sign in...
      </main>
    );
  }

  return (
    <main className='mx-auto max-w-5xl p-8'>
      <div className='flex items-center justify-between'>
        <div>
          <p className='text-sm text-gray-500'>Welcome back,</p>
          <h1 className='text-3xl font-bold'>{session.user.name}</h1>
          <p className='mt-1 text-sm text-gray-600'>{session.user.email}</p>
        </div>
        <div className='flex items-center gap-3'>
          <button
            type='button'
            onClick={handleGetProfile}
            className='rounded-md bg-black px-4 py-2 font-medium text-white'
          >
            Test protected API
          </button>

          <button
            type='button'
            onClick={handleSignOut}
            className='rounded-md border px-4 py-2 font-medium hover:bg-gray-100'
          >
            Sign out
          </button>
        </div>
      </div>

      <section className='mt-8 rounded-xl border p-6'>
        <h2 className='text-xl font-semibold'>TaskFlow Dashboard</h2>
        <p className='mt-2 text-gray-600'>
          Authentication is working. Next, we will create workspaces and tasks.
        </p>
      </section>
    </main>
  );
}
