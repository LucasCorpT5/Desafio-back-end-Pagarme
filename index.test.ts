import request, { Response } from 'supertest';
import app from './src/server';
import { transationService } from "./src/services/transactionService";
import { balanceController } from './src/controllers/balanceController';
import { balanceService } from './src/services/balanceService';
import { payableController } from './src/controllers/payableController';
import { payableService } from './src/services/payableService';

describe('GET /transactions/all', () => {
    it('deve retornar status 200 e todas as transações', async () => {
        const transactions = await transationService.listMaskedTransactions();

        const res: Response = await request(app).get('/transactions/all');

        expect(res.status).toBe(200);

        expect(res.body).toStrictEqual(transactions);
    });
})

describe('GET /customer/balance', () => {
    it('deve retornar o saldo do cliente', async () => {
        const res: Response = await request(app).get('/customer/balance');

        const { userId } = res.body;

        const balance = await balanceService.getCustomerBalance(userId);

        expect(res.status).toBe(200);

        expect(res.body.available).toBe(balance.available);
        expect(res.body.waitingFunds).toBe(balance.waitingFunds);
    });
})

describe('POST /payables/create', () => {
    it('deve criar uma payable', async () => {
        const res: Response = await request(app).post('/payables/create');
        const payableDate = new Date();

        const payable = res.body;

        const createPayable = await payableService.createPayable(payableDate, payable.amount, payable.status, payable.transactionId);

        expect(res.status).toBe(200);

        expect(payable.amount).toBe(createPayable.amount);
        expect(payable.status).toBe(createPayable.status);
        expect(payable.transactionId).toBe(createPayable.transactionId);

    });
})