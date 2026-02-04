import { Select } from '@base-ui/react/select';
import { Check, ChevronsUpDown } from 'lucide-react';
import { twJoin } from 'tailwind-merge';

export type SelectProps = {
  label: React.ReactNode;
  options: Array<TOption>;
  placeholder: string;
};

export type TOption = {
  label: React.ReactNode;
  value: string;
};

export function SelectInput<TValue, TMultiple extends boolean | undefined = false>({
  label,
  placeholder,
  options = [],
  ...props
}: Select.Root.Props<TValue, TMultiple> & SelectProps): React.ReactElement {
  const triggerClassNames = twJoin(
    'flex items-center justify-between gap-3 w-full p-2 rounded outline-none',
    'bg-slate-900 text-slate-200',
    'hover:bg-slate-800 hover:text-slate-50',
    'ring ring-slate-800 focus:ring-slate-700',
  );

  const popupClassNames = twJoin(
    'group min-w-(--anchor-width) origin-(--transform-origin) bg-clip-padding rounded-md',
    'bg-slate-900 text-slate-50 shadow-lg shadow-slate-950 outline outline-slate-600',
    'transition-[transform,scale,opacity] data-ending-style:scale-90 data-ending-style:opacity-0',
    'data-[side=none]:min-w-[calc(var(--anchor-width)+1rem)]',
    'data-[side=none]:data-ending-style:transition-none',
    'data-starting-style:scale-90 data-starting-style:opacity-0',
    'data-[side=none]:data-starting-style:scale-100',
    'data-[side=none]:data-starting-style:opacity-100',
    'data-[side=none]:data-starting-style:transition-none',
  );

  const listClassNames = twJoin(
    'relative py-1 scroll-py-6 overflow-y-auto max-h-(--available-height)',
  );

  const itemClassNames = twJoin(
    'grid grid-cols-[0.75rem_1fr] items-center gap-2 py-2 pr-4 pl-2.5 text-sm leading-4',
    'outline-none select-none group-data-[side=none]:pr-12 group-data-[side=none]:text-base',
    'group-data-[side=none]:leading-4 data-highlighted:relative data-highlighted:z-0',
    'data-highlighted:text-gray-50 data-highlighted:before:absolute cursor-pointer',
    'data-highlighted:before:inset-x-1 data-highlighted:before:inset-y-0',
    'data-highlighted:before:z-[-1] data-highlighted:before:rounded-sm',
    'data-highlighted:before:bg-slate-800 pointer-coarse:py-2.5 pointer-coarse:text-[0.925rem]',
  );

  return (
    <Select.Root items={options} {...props}>
      <Select.Trigger className={triggerClassNames}>
        <Select.Value className="data-placeholder:opacity-50" placeholder={placeholder} />
        <Select.Icon>
          <ChevronsUpDown size={18} strokeWidth={1.5} />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Positioner sideOffset={8}>
          <Select.Popup className={popupClassNames}>
            <Select.List className={listClassNames}>
              {options.map(({ value, label: optionLabel }) => (
                <Select.Item className={itemClassNames} key={value} value={value}>
                  <Select.ItemIndicator className="col-start-1">
                    <Check size={15} strokeWidth={1.5} />
                  </Select.ItemIndicator>
                  <Select.ItemText className="col-start-2">{optionLabel}</Select.ItemText>
                </Select.Item>
              ))}
            </Select.List>
          </Select.Popup>
        </Select.Positioner>
      </Select.Portal>
    </Select.Root>
  );
}
