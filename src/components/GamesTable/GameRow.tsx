import { useLoaderData } from '@tanstack/react-router';
import { Check } from 'lucide-react';
import { twJoin } from 'tailwind-merge';

import type { Game } from '~/generated/prisma/client';

import { anyMissingParts, ownedWithMissingParts } from '~/lib/utils';

import { OwnedStatus } from '../OwnedStatus';
import { BoxTag, CartTag, ManualTag } from '../tags';
import { ValueOrDash } from '../ValueOrDash';
import { AuthenticatedMenu } from './AuthenticatedMenu';

type Props = {
  game: Game;
};

export function GameRow({ game }: Props): React.ReactElement {
  const { currentUser } = useLoaderData({ from: '/games' });
  const isFullOwned = !anyMissingParts(game);
  const isPartialOwned = ownedWithMissingParts(game);

  const classNames = twJoin(
    'bg-slate-900/90 border-b border-b-slate-800/80 hover:bg-slate-800/90',
    isFullOwned && 'text-green-300/80',
    isPartialOwned && 'text-yellow-200/80',
    !game.owned && 'text-slate-600',
  );

  const cellClassNames = 'px-2 py-1';
  const mobileCellClassNames = twJoin(cellClassNames, 'hidden md:table-cell');

  return (
    <tr aria-disabled={!game.owned} className={classNames}>
      <td className={cellClassNames}>
        <div className="flex flex-row gap-1.5 items-center max-w-full md:max-w-90 lg:max-w-none min-w-0">
          <OwnedStatus game={game} />
          <span className="text-ellipsis text-nowrap overflow-hidden min-w-0">{game.name}</span>
        </div>
      </td>
      <td className={mobileCellClassNames}>
        <ValueOrDash
          render={(value) => <BoxTag value={value} />}
          value={game.owned ? game.box : undefined}
        />
      </td>
      <td className={mobileCellClassNames}>
        <ValueOrDash
          render={(value) => <CartTag value={value} />}
          value={game.owned ? game.cartridge : undefined}
        />
      </td>
      <td className={mobileCellClassNames}>
        <ValueOrDash
          render={(value) => <ManualTag value={value} />}
          value={game.owned ? game.manual : undefined}
        />
      </td>
      <td className={mobileCellClassNames}>
        <ValueOrDash
          render={() => <Check className="text-green-300/80" strokeWidth={1.3} />}
          value={game.ptManual}
        />
      </td>

      {currentUser && (
        <td className={twJoin(mobileCellClassNames, 'text-right')}>
          <AuthenticatedMenu game={game} />
        </td>
      )}
    </tr>
  );
}
