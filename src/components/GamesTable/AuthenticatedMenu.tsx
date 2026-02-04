import { Menu } from '@base-ui/react/menu';
import { Link, useNavigate } from '@tanstack/react-router';
import { MoreVertical } from 'lucide-react';

import type { Game } from '~/generated/prisma/client';

import { Button } from '../Button';

type Props = {
  game: Readonly<Game>;
};

export function AuthenticatedMenu({ game }: Props): React.ReactElement {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate({ params: { id: game.id }, to: '/games/$id' });
  };

  return (
    <Menu.Root>
      <Menu.Trigger
        render={
          <Button className="bg-transparent aspect-square rounded-full md:py-0 md:px-0 md:p-2 active:bg-emerald-700 data-popup-open:bg-emerald-700">
            <MoreVertical size={18} strokeWidth={1} />
          </Button>
        }
      />
      <Menu.Portal>
        <Menu.Positioner className="outline-none" sideOffset={8}>
          <Menu.Popup className="p-1 origin-(--transform-origin) rounded-md bg-slate-900 border border-slate-700 shadow-lg">
            <Menu.Item
              render={
                <Button
                  className="w-full flex text-start rounded-t-md bg-transparent hover:bg-slate-800 px-2 py-1"
                  onClick={handleClick}
                  render={
                    <Link className="flex" params={{ id: game.id }} to="/games/$id">
                      Edit
                    </Link>
                  }
                />
              }
            />
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  );
}
