import { createServerFn } from '@tanstack/react-start';
import { z } from 'zod';

import { prisma } from '~/db';
import { BoxType, CartridgeType, ManualType } from '~/generated/prisma/enums';

export const getGames = createServerFn({ method: 'GET' }).handler(async () => {
  return prisma.game.findMany({
    orderBy: { name: 'asc' },
  });
});

export const getGame = createServerFn({ method: 'GET' })
  .inputValidator(z.object({ id: z.uuid() }))
  .handler(async ({ data }) => {
    return prisma.game.findFirst({
      where: { id: data.id },
    });
  });

export const updateGame = createServerFn({ method: 'POST' })
  .inputValidator(
    z.object({
      id: z.uuid(),
      name: z.string().min(1),
      cartridge: z.enum(CartridgeType),
      box: z.enum(BoxType),
      manual: z.enum(ManualType),
      ptManual: z.boolean().optional().default(false),
      owned: z.boolean(),
    }),
  )
  .handler(async ({ data }) => {
    return prisma.game.update({
      where: { id: data.id },
      data: {
        name: data.name,
        cartridge: data.cartridge,
        box: data.box,
        manual: data.manual,
        ptManual: data.ptManual,
        owned: data.owned,
      },
    });
  });
