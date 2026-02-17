import { createServerFn } from '@tanstack/react-start';
import { getRequestHeaders } from '@tanstack/react-start/server';

import { auth } from '~/lib/auth';

export const getSession = createServerFn({ method: 'GET' }).handler(async () => {
  return await auth.api.getSession({ headers: getRequestHeaders() });
});

// Use this function to create a new user. Fill in the data and call it somewhere in the code.
export const createUser = createServerFn({ method: 'POST' }).handler(async () => {
  return await auth.api.signUpEmail({
    body: {
      name: 'ENTER NAME',
      email: 'ENTER EMAIL',
      password: 'ENTER PASSWORD',
    },
  });
});
