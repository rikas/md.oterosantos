/*
  Warnings:

  - Made the column `imageUrl` on table `Advert` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `Advert` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userId` on table `Advert` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Advert" DROP CONSTRAINT "Advert_userId_fkey";

-- AlterTable
ALTER TABLE "Advert" ALTER COLUMN "imageUrl" SET NOT NULL,
ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "userId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Advert" ADD CONSTRAINT "Advert_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
