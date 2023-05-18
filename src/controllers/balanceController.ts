import { Transaction } from ".prisma/client";
import prisma from "../prisma";
import { Request, Response } from "express";
import { balanceService } from "../services/balanceService";

export const balanceController = {
    getCustomerBalance: async(req: Request, res: Response) => {
        const userId = req.body.userId;

        const customerBalance = await balanceService.getCustomerBalance(userId);

        return res.json(customerBalance.available) && res.json(customerBalance.waitingFunds);
    }
}