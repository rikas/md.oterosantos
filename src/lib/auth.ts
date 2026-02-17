import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { tanstackStartCookies } from 'better-auth/tanstack-start';

import { prisma } from '~/db';

export const auth = betterAuth({
  database: prismaAdapter(prisma, { provider: 'postgresql' }),
  user: {
    deleteUser: {
      enabled: true,
    },
  },
  emailAndPassword: {
    disableSignUp: true, // enable to create users with email and password
    enabled: true,
    requireEmailVerification: false,
  },
  plugins: [tanstackStartCookies()],
  rateLimit: {
    enabled: true,
    max: 100,
    storage: 'memory',
    window: 10,
  },
});
