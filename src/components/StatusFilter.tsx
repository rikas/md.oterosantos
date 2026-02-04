import { Toggle } from '@base-ui/react/toggle';
import { ToggleGroup } from '@base-ui/react/toggle-group';
import { twJoin } from 'tailwind-merge';

export type OwnedType = 'all' | 'missing' | 'owned';

type Props = {
  activeFilter: Array<OwnedType>; // ToggleGroup works with array values always
  onChange: (newFilter: Array<OwnedType>) => void;
};

export function GameStatusFilter({ activeFilter, onChange }: Props): React.ReactElement {
  const buttonClassNames = twJoin(
    'px-3 py-2 text-slate-300 outline-none cursor-pointer',
    'hover:bg-slate-900 hover:text-slate-100',
    'min-w-30 md:min-w-20 grow',
    'first-of-type:rounded-l-md last-of-type:rounded-r-md last-of-type:border-none',
    'focus:ring-slate-500 focus-visible:ring-slate-500',
    'data-pressed:bg-slate-800',
  );
  return (
    <ToggleGroup
      className="inline-flex w-full items-center rounded-md border border-slate-800 p-1"
      onValueChange={onChange}
      value={activeFilter}
    >
      <Toggle className={buttonClassNames} value="all">
        All
      </Toggle>

      <Toggle className={buttonClassNames} value="owned">
        Owned
      </Toggle>

      <Toggle className={buttonClassNames} value="missing">
        Missing
      </Toggle>
    </ToggleGroup>
  );
}
