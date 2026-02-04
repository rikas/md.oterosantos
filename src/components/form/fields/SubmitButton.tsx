import type { ButtonProps } from '~/components/Button';

import { Button } from '~/components/Button';
import { useFormContext } from '~/lib/form';

type Props = ButtonProps & {
  label: string;
};

export function SubmitButton({ label, ...props }: Props): React.ReactElement {
  const form = useFormContext();

  return (
    <form.Subscribe selector={(state) => state.isSubmitting}>
      {(isSubmitting) => (
        <Button disabled={isSubmitting} type="submit" {...props}>
          {label}
        </Button>
      )}
    </form.Subscribe>
  );
}
