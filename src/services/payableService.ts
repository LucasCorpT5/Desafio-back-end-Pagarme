import { Transaction } from ".prisma/client";
import prisma from "../prisma";

export const payableService = {
    createPayable: async(payableDate: Date, payableAmount: number, payableStatus: string, transactionId: string) => {
        const payable = await prisma.payable.create({
            data: {
              transaction: {
                connect: { id: transactionId }
              },
              amount: payableAmount,
              status: payableStatus,
              paidAt: payableStatus === 'paid' ? payableDate : null,
            }
        });

        return payable;
    },
}