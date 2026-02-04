import { createServerFn, useServerFn } from '@tanstack/react-start';

import { auth } from '~/lib/auth';

const registerFn = createServerFn({ method: 'GET' }).handler(async () => {
  console.log('ESTOU AQUI MEU CHAPA');
  await auth.api.signUpEmail({
    body: {
      email: 'oterosantos@gmail.com',
      name: 'Ricardo Otero',
      password: 'SEGAMegaDrive#2026!',
    },
  });
});

export function RegisterButton(): React.ReactElement {
  const register = useServerFn(registerFn);
  return <button onClick={() => register()}>Register</button>;
}
