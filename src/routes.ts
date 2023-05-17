import express from "express";
import { transactionController } from "./controllers/transactionController";
import { payableController } from "./controllers/payableController";

const router = express.Router();

router.get("/transactions/all", transactionController.listAllTransactions);

router.get("/customer/balance", payableController.getCustomerBalance);
router.post("/payables/create", payableController.createPayable);

export {
    router
}