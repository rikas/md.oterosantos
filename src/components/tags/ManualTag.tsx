import type { ManualType } from '~/generated/prisma/enums';

import { Tag } from '../Tag';

const cartTypeLabels: Record<ManualType, string> = {
  NONE: 'Missing',
  MD_EU: 'EU',
  MD_JP: 'JP',
  GENESIS: 'Genesis',
};

const cartTypeColors: Record<ManualType, 'green' | 'red' | 'yellow'> = {
  NONE: 'red',
  MD_EU: 'green',
  MD_JP: 'yellow',
  GENESIS: 'yellow',
};

type Props = {
  value: ManualType;
};

export function ManualTag({ value }: Props): React.ReactElement {
  return <Tag color={cartTypeColors[value]} label={cartTypeLabels[value]} />;
}
