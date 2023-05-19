import { Transaction } from ".prisma/client";
import prisma from "../prisma";
import { Request, Response } from "express";
import { balanceService } from "../services/balanceService";

export const balanceController = {
    getCustomerBalance: async(req: Request, res: Response) => {
        const userId = req.body.userId;

        const customerBalance = await balanceService.getCustomerBalance(userId);
        const balance = customerBalance.available
        const waiting_funds = customerBalance.waitingFunds;

        return res.json({balance, waiting_funds});
    }
}