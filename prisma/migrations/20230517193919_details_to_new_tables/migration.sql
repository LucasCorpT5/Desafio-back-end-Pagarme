/*
  Warnings:

  - You are about to drop the column `status` on the `Transaction` table. All the data in the column will be lost.
  - Added the required column `cardData` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Payable" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "amount" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "paidAt" DROP NOT NULL,
ALTER COLUMN "paidAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "status",
ADD COLUMN     "cardData" JSONB NOT NULL,
ALTER COLUMN "amount" SET DATA TYPE DOUBLE PRECISION;
