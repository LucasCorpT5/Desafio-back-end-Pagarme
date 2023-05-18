import express from "express";
import { transactionController } from "./controllers/transactionController";
import { payableController } from "./controllers/payableController";
import { balanceController } from "./controllers/balanceController";

const router = express.Router();

router.get("/transactions/all", transactionController.listAllTransactions);

router.get("/customer/balance", balanceController.getCustomerBalance);
router.post("/payables/create", payableController.createPayable);

export {
    router
}