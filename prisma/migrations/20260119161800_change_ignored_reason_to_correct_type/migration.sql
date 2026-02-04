/*
  Warnings:

  - The `ignoredReason` column on the `Advert` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Advert" DROP COLUMN "ignoredReason",
ADD COLUMN     "ignoredReason" "IgnoredReason" NOT NULL DEFAULT 'NOT_INTERESTED';
