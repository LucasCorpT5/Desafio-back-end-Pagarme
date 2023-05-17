import prisma from "../prisma";

export const transationService = {
    listAllTransaction: async() => {
        const transactions = await prisma.transaction.findMany();

        return transactions;
    }
}