import { AlertTriangle } from 'lucide-react';
import { useState } from 'react';

import { authClient } from '~/lib/auth-client';
import { useAppForm } from '~/lib/form';

type Props = {
  onSuccess: () => void;
};

export function LoginForm({ onSuccess }: Props): React.ReactElement {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const form = useAppForm({
    defaultValues: {
      email: '',
      password: '',
    },
    onSubmit: async ({ value }) => {
      const { error } = await authClient.signIn.email(value);

      if (error) {
        setErrorMessage(error.message || '');
      } else {
        onSuccess();
      }
    },
  });

  return (
    <form
      className="flex flex-col gap-3"
      onSubmit={(e) => {
        form.handleSubmit();
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <div>
        {errorMessage && (
          <div className="text-red-400 bg-red-950 flex flex-row gap-2 p-2 rounded-md">
            <AlertTriangle strokeWidth={1.3} />
            {errorMessage}
          </div>
        )}
      </div>

      <form.AppField name="email">
        {(field) => <field.TextField placeholder="Email" type="email" />}
      </form.AppField>

      <form.AppField name="password">
        {(field) => <field.TextField placeholder="Password" type="password" />}
      </form.AppField>

      <form.AppForm>
        <form.SubmitButton className="mt-2" label="Login" />
      </form.AppForm>
    </form>
  );
}
