import type { BoxType } from '~/generated/prisma/enums';

import { Tag } from '../Tag';

const boxTypeLabels: Record<BoxType, string> = {
  NONE: 'Missing',
  MD_EU: 'EU',
  MD_JP: 'JP',
  GENESIS: 'Genesis',
};

const boxTypeColors: Record<BoxType, 'green' | 'red' | 'yellow'> = {
  NONE: 'red',
  MD_EU: 'green',
  MD_JP: 'yellow',
  GENESIS: 'yellow',
};

type Props = {
  value: BoxType;
};

export function BoxTag({ value }: Props): React.ReactElement {
  return <Tag color={boxTypeColors[value]} label={boxTypeLabels[value]} />;
}
