import { useFieldContext } from '~/lib/form';

import type { CheckboxInputProps } from '../CheckboxInput';

import { CheckboxInput } from '../CheckboxInput';

export function CheckboxField({ ...props }: CheckboxInputProps): React.ReactElement {
  const field = useFieldContext<boolean>();

  return (
    <CheckboxInput
      checked={field.state.value}
      onCheckedChange={(value) => field.handleChange(value)}
      {...props}
    />
  );
}
