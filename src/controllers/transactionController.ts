import { Request, Response } from "express";
import { transationService } from "../services/transactionService";

export const transactionController = {
    listAllTransactions: async(req: Request, res: Response) => {
        const transactions = transationService.listMaskedTransactions();

        return res.json(transactions); 
    }
}