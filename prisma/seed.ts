import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';

import type { Prisma } from '~/generated/prisma/client';

import { PrismaClient } from '~/generated/prisma/client';

import seedData from './seed-data.json';

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

type Game = Prisma.GameCreateInput;

const convertCartridge = (cartridge: string): Game['cartridge'] => {
  switch (cartridge) {
    case 'cart_genesis':
      return 'GENESIS';
    case 'cart_md_eu':
      return 'MD_EU';
    case 'cart_md_jp':
      return 'MD_JP';
    default:
      return 'NONE';
  }
};

const convertBox = (box: string): Game['box'] => {
  switch (box) {
    case 'box_genesis':
      return 'GENESIS';
    case 'box_md_eu':
      return 'MD_EU';
    case 'box_md_jp':
      return 'MD_JP';
    default:
      return 'NONE';
  }
};

const convertManual = (manual: string): Game['manual'] => {
  switch (manual) {
    case 'manual_genesis':
      return 'GENESIS';
    case 'manual_md_eu':
      return 'MD_EU';
    case 'manual_md_jp':
      return 'MD_JP';
    default:
      return 'NONE';
  }
};

async function main() {
  for (const game of seedData) {
    const gameInput: Game = {
      name: game.name,
      cartridge: convertCartridge(game.cartridge),
      box: convertBox(game.box),
      manual: convertManual(game.manual),
      ptManual: game.pt_manual,
      owned: game.owned,
      status: game.owned ? 'OWNED' : 'NONE',
    };

    const existing = await prisma.game.findFirst({
      where: { name: game.name },
    });

    if (existing) {
      await prisma.game.upsert({
        where: { id: existing.id },
        create: gameInput,
        update: gameInput,
      });
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
