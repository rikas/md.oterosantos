import { useCollection } from '@cloudscape-design/collection-hooks';
import { createFileRoute, Outlet } from '@tanstack/react-router';
import { useMemo, useState } from 'react';

import type { OwnedType } from '~/components/StatusFilter';
import type { Game } from '~/generated/prisma/client';

import { getGames } from '~/api/games';
import { getSession } from '~/api/sessions';
import { Banner } from '~/components/Banner';
import { SearchInput } from '~/components/form';
import { EmptyState, GamesTable } from '~/components/GamesTable';
import { Pagination } from '~/components/Pagination';
import { GameStatusFilter } from '~/components/StatusFilter';

const ROWS_PER_PAGE = 100;

export const Route = createFileRoute('/games')({
  loader: async () => {
    const games = await getGames();
    const session = await getSession();

    return { games, currentUser: session?.user };
  },
  component: RouteComponent,
});

function RouteComponent(): React.ReactElement {
  const { games } = Route.useLoaderData();
  const [filter, setFilter] = useState<Array<OwnedType>>(['all']);

  const ownedGames: Array<Game> = useMemo(() => games.filter((game) => game.owned), [games]);

  const filteredGames: Array<Game> = useMemo(() => {
    if (filter.includes('owned')) {
      return games.filter((game) => game.owned);
    }

    if (filter.includes('missing')) {
      return games.filter((game) => !game.owned);
    }

    return games;
  }, [filter, games]);

  const { collectionProps, filteredItemsCount, filterProps, items, paginationProps } =
    useCollection(filteredGames, {
      filtering: {
        empty: <EmptyState description="You have no games" title="No games to display" />,
        noMatch: (
          <EmptyState description="Try adjusting your search" title="We can't find a match" />
        ),
      },
      pagination: {
        pageSize: ROWS_PER_PAGE,
      },
      selection: {},
      sorting: {},
    });

  return (
    <div className="container m-auto py-10 px-4">
      <div className="flex flex-col gap-10">
        <Banner ownedCount={ownedGames.length} totalCount={games.length} />

        <div className="flex flex-col gap-4" role="main">
          <div className="flex md:hidden">
            <GameStatusFilter activeFilter={filter} onChange={setFilter} />
          </div>

          <div className="flex flex-row justify-between gap-4">
            <SearchInput onChange={filterProps.onChange} value={filterProps.filteringText} />

            <div className="flex flex-row gap-6">
              <div className="hidden md:flex">
                <GameStatusFilter activeFilter={filter} onChange={setFilter} />
              </div>

              <Pagination
                currentPageIndex={paginationProps.currentPageIndex}
                onChange={paginationProps.onChange}
                pagesCount={paginationProps.pagesCount}
              />
            </div>
          </div>

          <GamesTable
            emptyState={collectionProps.empty}
            filteredItemsCount={filteredItemsCount || 0}
            games={items}
          />
        </div>
      </div>

      <Outlet />
    </div>
  );
}
