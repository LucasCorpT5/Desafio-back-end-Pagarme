import { Transaction } from ".prisma/client";
import { payableService } from "../services/payableService";
import { Request, Response } from "express";

export const payableController = {
    createPayable: async(req: Request, res: Response, transaction: Transaction) => {
        const payableDate = new Date();
        const payableAmount = transaction.amount * 0.95; // desconto de 5% para a taxa do PSP
        const payableStatus = transaction.paymentMethod === 'debit_card' ? 'paid' : 'waiting_funds';
        const payablePaymentDate = new Date();

        if(transaction.paymentMethod === "credit_card") {
            payablePaymentDate.setDate(payableDate.getDate() + 30);
        }

        const payableCreated = payableService.createPayable(payableDate, payableAmount, payableStatus, transaction);
    
        return res.json(payableCreated);
    },
    
    getCustomerBalance: async(req: Request, res: Response) => {
        
    }
}