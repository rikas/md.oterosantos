import { useLoaderData } from '@tanstack/react-router';
import { twJoin } from 'tailwind-merge';

import type { Game } from '~/generated/prisma/client';

import { GameRow } from './GameRow';

type Props = {
  emptyState: React.ReactNode;
  filteredItemsCount: number;
  games: Readonly<Array<Game>>;
};

export function GamesTable({ emptyState, filteredItemsCount, games }: Props): React.ReactElement {
  const { currentUser } = useLoaderData({ from: '/games' });
  const classNames = 'text-left text-base font-normal p-2 bg-slate-950/20 text-slate-400';
  const mobileClassNames = twJoin(classNames, 'hidden md:table-cell');

  return (
    <table className="text-lg w-full text-left">
      <thead>
        <tr>
          <th className={classNames}>Name</th>
          <th className={mobileClassNames}>Box</th>
          <th className={mobileClassNames}>Cart</th>
          <th className={mobileClassNames}>Manual</th>
          <th className={twJoin(mobileClassNames, 'w-32')}>PT Manual</th>
          {currentUser && <th className={twJoin(mobileClassNames, 'w-32')} />}
        </tr>
      </thead>

      <tbody>
        {filteredItemsCount === 0 ? (
          <tr>
            <td className="bg-slate-800/30" colSpan={6}>
              {emptyState}
            </td>
          </tr>
        ) : null}
        {filteredItemsCount > 0 && games.map((game) => <GameRow game={game} key={game.id} />)}
      </tbody>
    </table>
  );
}
