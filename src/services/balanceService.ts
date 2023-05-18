import prisma from "../prisma";

export const balanceService = {
    getCustomerBalance: async(userId: string) => {
        const payables = await prisma.payable.findMany({
            where: {
                transaction: {
                    userId,
                }
            }
        });
    
        let availableBalance = 0;
        let waitingFundsBalance = 0;
    
        payables.forEach(payable => {
            if(payable.status === "paid") {
                availableBalance += payable.amount;
            } else if(payable.status === "waiting_funds") {
                waitingFundsBalance += payable.amount;
            }
        });
    
        return {
            available: availableBalance,
            waitingFunds: waitingFundsBalance
        };
    }
}