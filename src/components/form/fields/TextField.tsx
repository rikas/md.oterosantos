import { Field } from '@base-ui/react';

import { useFieldContext } from '~/lib/form';

import { TextInput } from '../TextInput';

type TextFieldProps = React.ComponentProps<'input'> & {
  label?: React.ReactNode;
};

export function TextField({ className, label, ...props }: TextFieldProps): React.ReactElement {
  const field = useFieldContext<string>();

  return (
    <Field.Root className="flex flex-col gap-1 items-start">
      {label && <Field.Label>{label}</Field.Label>}
      <Field.Control
        render={
          <TextInput
            onChange={(e) => field.handleChange(e.target.value)}
            value={field.state.value}
            {...props}
          />
        }
      />
    </Field.Root>
  );
}
