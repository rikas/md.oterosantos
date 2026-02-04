import type { PropsWithChildren } from 'react';

import type { Game } from '~/generated/prisma/client';

import { BoxTag, CartTag, ManualTag } from './tags';

function LabelWrapper({ children }: PropsWithChildren): React.ReactElement {
  return <span className="flex flex-row gap-3 items-center">{children}</span>;
}

export const boxOptions: Array<{ label: React.ReactNode; value: Game['box'] }> = [
  {
    label: (
      <LabelWrapper>
        None <BoxTag value="NONE" />
      </LabelWrapper>
    ),
    value: 'NONE',
  },
  {
    label: (
      <LabelWrapper>
        Mega Drive
        <BoxTag value="MD_EU" />
      </LabelWrapper>
    ),
    value: 'MD_EU',
  },
  {
    label: (
      <LabelWrapper>
        Mega Drive
        <BoxTag value="MD_JP" />
      </LabelWrapper>
    ),
    value: 'MD_JP',
  },
  {
    label: (
      <LabelWrapper>
        Genesis
        <BoxTag value="GENESIS" />
      </LabelWrapper>
    ),
    value: 'GENESIS',
  },
];

export const cartOptions: Array<{ label: React.ReactNode; value: Game['cartridge'] }> = [
  {
    label: (
      <LabelWrapper>
        None
        <CartTag value="NONE" />
      </LabelWrapper>
    ),
    value: 'NONE',
  },
  {
    label: (
      <LabelWrapper>
        Mega Drive
        <CartTag value="MD_EU" />
      </LabelWrapper>
    ),
    value: 'MD_EU',
  },
  {
    label: (
      <LabelWrapper>
        Mega Drive
        <CartTag value="MD_JP" />
      </LabelWrapper>
    ),
    value: 'MD_JP',
  },
  {
    label: (
      <LabelWrapper>
        Genesis
        <CartTag value="GENESIS" />
      </LabelWrapper>
    ),
    value: 'GENESIS',
  },
];

export const manualOptions: Array<{ label: React.ReactNode; value: Game['manual'] }> = [
  {
    label: (
      <LabelWrapper>
        None
        <ManualTag value="NONE" />
      </LabelWrapper>
    ),
    value: 'NONE',
  },
  {
    label: (
      <LabelWrapper>
        Mega Drive
        <ManualTag value="MD_EU" />
      </LabelWrapper>
    ),
    value: 'MD_EU',
  },
  {
    label: (
      <LabelWrapper>
        Mega Drive
        <ManualTag value="MD_JP" />
      </LabelWrapper>
    ),
    value: 'MD_JP',
  },
  {
    label: (
      <LabelWrapper>
        Genesis
        <ManualTag value="GENESIS" />
      </LabelWrapper>
    ),
    value: 'GENESIS',
  },
];
