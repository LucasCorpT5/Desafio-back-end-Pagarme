import prisma from "../prisma";

export const transationService = {
    listMaskedTransactions: async() => {
        const transactions = await prisma.transaction.findMany();
        const maskedTransactions = await transactions.map(transaction => {
            const maskedCardNumber = `**** **** **** ${transaction.cardNumber.slice(-4)}`;
            return {
                ...transaction,
                cardNumber: maskedCardNumber,
                createdAt: transaction.createdAt.toISOString(), // Converter a data para string no formato ISO 8601
            }
        });

        return maskedTransactions;
    },
}