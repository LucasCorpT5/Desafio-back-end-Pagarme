import prisma from "../prisma";

export const transationService = {
    listMaskedTransactions: async() => {
        const transactions = await prisma.transaction.findMany();
        const maskedTransactions = await transactions.map(transaction => {
            const maskedCardNumber = `**** **** **** ${transaction.cardNumber.slice(-4)}`;
            return {
                ...transaction,
                cardNumber: maskedCardNumber
            }
        });

        return maskedTransactions;
    },
}