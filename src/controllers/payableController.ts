import { Transaction } from ".prisma/client";

export const payableController = {
    createPayable: async(transaction: Transaction) => {
        const payableDate = new Date();
        const payableAmount = transaction.amount * 0.95; // desconto de 5% para a taxa do PSP
        const payableStatus = transaction.paymentMethod === 'debit_card' ? 'paid' : 'waiting_funds';
        const payablePaymentDate = new Date();

        if(transaction.paymentMethod === "credit_card") {
            payablePaymentDate.setDate(payableDate.getDate() + 30);
        }
    }        
}