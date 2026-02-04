import type { Game } from '~/generated/prisma/client';

export function anyMissingParts(game: Game): boolean {
  return game.box !== 'MD_EU' || game.cartridge !== 'MD_EU' || game.manual !== 'MD_EU';
}

export function fullMissingParts(game: Game): boolean {
  return game.box === 'NONE' && game.cartridge === 'NONE' && game.manual === 'NONE';
}

export function ownedWithMissingParts(game: Game): boolean {
  return game.owned && anyMissingParts(game);
}
