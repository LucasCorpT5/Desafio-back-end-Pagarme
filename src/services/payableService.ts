import { Transaction } from ".prisma/client";
import prisma from "../prisma";

export const payableService = {
    createPayable: async(payableDate: Date, payableAmount: number, payableStatus: string, transaction: Transaction) => {
        const payable = await prisma.payable.create({
            data: {
              transaction: {
                connect: { id: transaction.id }
              },
              amount: payableAmount,
              status: payableStatus,
              paidAt: payableStatus === 'paid' ? payableDate : null,
            }
        });

        return payable;
    },

    getCustomerBalance: async(cardNumber: string) => {
        const payables = await prisma.payable.findMany({
            where: {
                transaction: {
                    cardNumber,
                }
            }
        });

        const availableBalance = payables
            .filter(payable => payable.status === "paid")
            .reduce((total, payable) => total + payable.amount, 0);

        const waitingFundsBalance = payables
            .filter(payable => payable.status === "waiting_funds")
            .reduce((total, payable) => total + payable.amount, 0);

        return {
            availableBalance,
            waitingFundsBalance
        };
    }
}