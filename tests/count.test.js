import { prismaClient } from "../src/prisma-client";

describe('Prisma Client', () => {
    it("should be able to count data", async () => {
        const customer = await prismaClient.customer.count();
        console.info(`Total data: ${customer}`);
        
        expect(customer).toBeGreaterThan(0);
    });
});