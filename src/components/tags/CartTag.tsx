import type { CartridgeType } from '~/generated/prisma/enums';

import { Tag } from '../Tag';

const cartTypeLabels: Record<CartridgeType, string> = {
  NONE: 'Missing',
  MD_EU: 'EU',
  MD_JP: 'JP',
  GENESIS: 'Genesis',
};

const cartTypeColors: Record<CartridgeType, 'green' | 'red' | 'yellow'> = {
  NONE: 'red',
  MD_EU: 'green',
  MD_JP: 'yellow',
  GENESIS: 'yellow',
};

type Props = {
  value: CartridgeType;
};

export function CartTag({ value }: Props): React.ReactElement {
  return <Tag color={cartTypeColors[value]} label={cartTypeLabels[value]} />;
}
