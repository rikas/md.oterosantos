import { CircleCheck, CircleDashed, CircleMinus } from 'lucide-react';

import type { Game } from '~/generated/prisma/client';

import { anyMissingParts, ownedWithMissingParts } from '~/lib/utils';

type Props = {
  game: Readonly<Game>;
};

export function OwnedStatus({ game }: Props): React.ReactElement {
  const iconProps = { size: 24, strokeWidth: 1.3 };

  if (!anyMissingParts(game)) {
    return <CircleCheck {...iconProps} />;
  } else if (ownedWithMissingParts(game)) {
    return <CircleMinus {...iconProps} />;
  } else {
    return <CircleDashed {...iconProps} />;
  }
}
