/*
  Warnings:

  - You are about to drop the column `cardData` on the `Transaction` table. All the data in the column will be lost.
  - Added the required column `cardCvv` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cardExpiration` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cardHolderName` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cardNumber` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paymentMethod` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "cardData",
ADD COLUMN     "cardCvv" TEXT NOT NULL,
ADD COLUMN     "cardExpiration" TEXT NOT NULL,
ADD COLUMN     "cardHolderName" TEXT NOT NULL,
ADD COLUMN     "cardNumber" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "paymentMethod" TEXT NOT NULL;
