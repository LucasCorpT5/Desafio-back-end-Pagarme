import prisma from "../prisma";

export const transationService = {
    listAllTransactions: async() => {
        const transactions = await prisma.transaction.findMany();

        return transactions;
    }
}