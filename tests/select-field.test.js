import { prismaClient } from "../src/prisma-client";

describe('Prisma Client', () => {
    it("should be able to create and select fields", async () => {
        await prismaClient.$executeRaw`delete from customers where id = 'jennifer'`;
        const data = {
            id: 'jennifer',
            name: 'Jennifer Basa Sondang',
            phone: '129183723',
            email: 'jennifer@mail.com'
        };

        const customer = await prismaClient.customer.create({
            data: data,
            select: {
                id: true,
                email: true
            }
        });

        expect(customer.id).toBe(data.id);
        expect(customer.email).toBe(data.email);
        expect(customer.name).toBeUndefined();
        expect(customer.phone).toBeUndefined();
    });

    it("should be able to find many with select fields", async () => {
        const customer = await prismaClient.customer.findMany({
            select: {
                id: true,
                email: true
            }
        });

        for(const row of customer) {
            expect(row.id).toBeDefined();
            expect(row.email).toBeDefined();
            expect(row.name).toBeUndefined();
            expect(row.phone).toBeUndefined();
        }
    });
});