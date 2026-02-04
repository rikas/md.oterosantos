import { useLoaderData, useRouter } from '@tanstack/react-router';
import { useMemo } from 'react';

import { authClient } from '~/lib/auth-client';

import { Button } from './Button';
import { LoginModal } from './sessions';

type Props = {
  ownedCount: number;
  totalCount: number;
};

export function Banner({ ownedCount, totalCount }: Props): React.ReactElement {
  const router = useRouter();
  const { currentUser } = useLoaderData({ from: '/games' });

  const percentageComplete = useMemo(() => {
    if (totalCount === 0) {
      return (0.0).toFixed(2);
    }

    return ((ownedCount * 100) / totalCount).toFixed(2);
  }, [ownedCount, totalCount]);

  return (
    <div className="relative flex flex-col gap-2 items-start" role="banner">
      <h1 className="bg-clip-text bg-linear-to-br from-blue-100 via-blue-500 to-emerald-400 text-transparent text-3xl md:text-6xl font-headings opacity-80">
        MegaDrive Database
      </h1>

      <h2 className="text-lg md:text-2xl text-slate-300 font-extralight">
        {percentageComplete}% Complete ({ownedCount} / {totalCount})
      </h2>

      <div className="absolute right-0">
        {currentUser ? (
          <Button
            className="bg-transparent border-2 border-emerald-700"
            onClick={() => authClient.signOut({}, { onSuccess: () => router.invalidate() })}
          >
            Logout
          </Button>
        ) : (
          <LoginModal />
        )}
      </div>
    </div>
  );
}
