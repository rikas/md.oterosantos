import { Field } from '@base-ui/react';

import { useFieldContext } from '~/lib/form';

import type { SelectProps } from '../SelectInput';

import { SelectInput } from '../SelectInput';

type Props = React.ComponentProps<'select'> & SelectProps;

export function SelectField({ label, className, options, ...props }: Props): React.ReactElement {
  const field = useFieldContext<string>();

  return (
    <Field.Root className="flex flex-col gap-1 items-start">
      <Field.Label>{label}</Field.Label>
      <Field.Control
        render={
          <SelectInput
            multiple={false}
            onValueChange={(value) => field.handleChange(String(value))}
            options={options}
            value={field.state.value}
            {...props}
          />
        }
      />
    </Field.Root>
  );
}
