import express from "express";
import { transactionController } from "./controllers/transactionController";

const router = express.Router();

router.get("/transactions/all", transactionController.listAllTransactions);

export {
    router
}