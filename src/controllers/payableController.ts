import { Transaction } from "@prisma/client";
import { payableService } from "../services/payableService";
import { Request, Response } from "express";

export const payableController = {
    createPayable: async(req: Request, res: Response) => {
        try {
            const { amount, paymentMethod, transactionId } = req.body;

            const payableDate = new Date();
            const payableAmount = amount * 0.95; // desconto de 5% para a taxa do PSP
            const payableStatus = paymentMethod === 'debit_card' ? 'paid' : 'waiting_funds';
            const payablePaymentDate = new Date();

            if(paymentMethod === "credit_card") {
                payablePaymentDate.setDate(payableDate.getDate() + 30);
            }

            const payableCreated = payableService.createPayable(payableDate, payableAmount, payableStatus, transactionId);
        
            return res.json(payableCreated);
        } catch(err) {
            if(err instanceof Error) {
                return res.status(401).json({ err: err.message });
            }
        }
    },
    
    getCustomerBalance: async(req: Request, res: Response) => {

    }
}