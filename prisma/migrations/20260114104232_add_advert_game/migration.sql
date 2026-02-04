-- CreateTable
CREATE TABLE "AdvertGame" (
    "advertId" TEXT NOT NULL,
    "gameId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AdvertGame_pkey" PRIMARY KEY ("advertId","gameId")
);

-- AddForeignKey
ALTER TABLE "AdvertGame" ADD CONSTRAINT "AdvertGame_advertId_fkey" FOREIGN KEY ("advertId") REFERENCES "Advert"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AdvertGame" ADD CONSTRAINT "AdvertGame_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
