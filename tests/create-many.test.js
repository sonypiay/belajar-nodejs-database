import { prismaClient } from "../src/prisma-client.js";

describe('Prisma Client', () => {
    it("should be able to create many", async () => {
        await prismaClient.$executeRaw`DELETE FROM customers`;

        const customer = await prismaClient.customer.createMany({
            data: [
                {
                    id: 'sony',
                    name: 'sonypiay',
                    phone: '123',
                    email: 'sony@mail.com'
                },
                {
                    id: 'eko',
                    name: 'eko',
                    phone: '456',
                    email: 'eko@mail.com'
                },
                {
                    id: 'budi',
                    name: 'budi',
                    phone: '789',
                    email: 'budi@mail.com'
                },
                {
                    id: 'john',
                    name: 'john',
                    phone: '101112',
                    email: 'john@mail.com'
                },
            ]
        });

        expect(customer.count).toBe(4);
    });

    it("should be able to update many", async () => {
        const customer = await prismaClient.customer.updateMany({
            data: {
                email: 'sony@eannovate.com'
            },
            where: {
                name: 'sonypiay'
            }
        });

        expect(customer.count).toBe(1);
    });

    it("should be able to delete many", async () => {
        const customer = await prismaClient.customer.deleteMany({
            where: {
                name: 'eko'
            }
        });

        expect(customer.count).toBe(1);
    });

    it("should be able to find many", async () => {
        const customer = await prismaClient.customer.findMany({
        });

        console.info(customer);
        expect(customer.length).toBe(4);
    });
});