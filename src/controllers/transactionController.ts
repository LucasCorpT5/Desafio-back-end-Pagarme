import { Request, Response } from "express";
import { transationService } from "../services/transactionService";

export const transactionController = {
    listAllTransactions: async(req: Request, res: Response) => {
        const transactions = await transationService.listMaskedTransactions();

        return res.json(transactions)
        // return transactions; 
    }
}