import { prismaClient } from "../src/prisma-client.js";

describe('CRUD', () => {
    it("should be able to create sequential transaction", async () => {
        const [eko, budi] = await prismaClient.$transaction([
            prismaClient.customer.create({
                data: {
                    id: 'eko',
                    name: 'eko',
                    phone: '123123',
                    email: 'eko@mail.com'
                }
            }),
            prismaClient.customer.create({
                data: {
                    id: 'budi',
                    name: 'budi',
                    phone: '1234',
                    email: 'budi@mail.com'
                }
            })
        ]);

        expect(eko.name).toBe('eko');
        expect(budi.name).toBe('budi');

        await prismaClient.$executeRaw`DELETE FROM customers`;
    });

    it("should be able to create interactive transaction", async () => {
        const [eko, budi] = await prismaClient.$transaction(async(prisma) => {
            const eko = await prisma.customer.create({
                data: {
                    id: 'eko',
                    name: 'eko',
                    phone: '123123',
                    email: 'eko@mail.com'
                }
            });

            const budi = await prisma.customer.create({
                data: {
                    id: 'budi',
                    name: 'budi',
                    phone: '1234',
                    email: 'budi@mail.com'
                }
            });

            return [eko, budi];
        });

        expect(eko.name).toBe('eko');
        expect(budi.name).toBe('budi');

        await prismaClient.$executeRaw`DELETE FROM customers`;
    });
});