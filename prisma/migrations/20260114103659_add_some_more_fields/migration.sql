-- CreateEnum
CREATE TYPE "IgnoredReason" AS ENUM ('NOT_INTERESTED', 'ALREADY_OWNED', 'INCOMPLETE', 'PRICE_TOO_HIGH', 'POOR_CONDITION', 'OTHER');

-- CreateEnum
CREATE TYPE "BoxType" AS ENUM ('NONE', 'MD_EU', 'MD_JP', 'GENESIS');

-- CreateEnum
CREATE TYPE "CartridgeType" AS ENUM ('NONE', 'MD_EU', 'MD_JP', 'GENESIS');

-- CreateEnum
CREATE TYPE "ManualType" AS ENUM ('NONE', 'MD_EU', 'MD_JP', 'GENESIS');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('NONE', 'WANT_TO_BUY', 'LOOKING_FOR', 'OWNED');

-- AlterTable
ALTER TABLE "Advert" ADD COLUMN     "ignoredReason" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "Game" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "owned" BOOLEAN NOT NULL DEFAULT false,
    "box" "BoxType" NOT NULL DEFAULT 'NONE',
    "cartridge" "CartridgeType" NOT NULL DEFAULT 'NONE',
    "manual" "ManualType" NOT NULL DEFAULT 'NONE',
    "ptManual" BOOLEAN NOT NULL DEFAULT false,
    "status" "Status" NOT NULL DEFAULT 'NONE',

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);
