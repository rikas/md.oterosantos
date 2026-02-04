import { Field } from '@base-ui/react';
import { Checkbox } from '@base-ui/react/checkbox';
import { Check } from 'lucide-react';
import { twJoin } from 'tailwind-merge';

export type CheckboxInputProps = Checkbox.Root.Props & {
  label: string;
};

export function CheckboxInput({ label, ...props }: CheckboxInputProps): React.ReactElement {
  const checkClassNames = twJoin(
    'flex size-5 items-center justify-center rounded-md',
    'data-checked:bg-emerald-800 data-unchecked:bg-transparent',
    'data-unchecked:border data-unchecked:border-emerald-700',
    'data-unchecked:hover:bg-slate-800',
  );

  return (
    <Field.Root className="flex items-center gap-2">
      <Field.Control
        render={
          <Checkbox.Root className={checkClassNames} {...props}>
            <Checkbox.Indicator className="flex text-slate-50 data-unchecked:hidden">
              <Check size={20} strokeWidth={1.5} />
            </Checkbox.Indicator>
          </Checkbox.Root>
        }
      />
      <Field.Label>{label}</Field.Label>
    </Field.Root>
  );
}
