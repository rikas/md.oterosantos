import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { tanstackStartCookies } from 'better-auth/tanstack-start';

import { prisma } from '~/db';

export const auth = betterAuth({
  database: prismaAdapter(prisma, { provider: 'postgresql' }),
  emailAndPassword: {
    disableSignUp: true,
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
