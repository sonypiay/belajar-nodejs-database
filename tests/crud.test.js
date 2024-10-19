import { prismaClient } from "../src/prisma-client.js";

describe('CRUD', () => {
    it("should be able to create customer", async () => {
        const data = {
            id: 'sony',
            name: 'sonypiay',
            phone: '12345678',
            email: 'sony@eannovate.com'
        };

        const customer = await prismaClient.customer.create({
            data: data
        });

        expect(customer).toEqual(data);
    });

    it("should be able to update customer", async () => {
        const data = {
            name: 'sony darmawan',
            phone: '12345678',
            email: 'sony@eannovate.com'
        };

        const customer = await prismaClient.customer.update({
            data: {
                name: data.name
            },
            where: {
                id: 'sony'
            }
        });

        expect(customer.id).toBe('sony');
        expect(customer.name).toBe('sony darmawan');
        expect(customer.phone).toBe('12345678');
        expect(customer.email).toBe('sony@eannovate.com');
    });

    it("should be able to read customer", async () => {
        const customer = await prismaClient.customer.findUnique({
            where: {
                id: 'sony'
            }
        });

        expect(customer.id).toBe('sony');
        expect(customer.name).toBe('sony darmawan');
        expect(customer.phone).toBe('12345678');
        expect(customer.email).toBe('sony@eannovate.com');
    });

    it("should be able to delete customer", async () => {
        const customer = await prismaClient.customer.delete({
            where: {
                id: 'sony'
            }
        });

        expect(customer.id).toBe('sony');
        expect(customer.name).toBe('sony darmawan');
        expect(customer.phone).toBe('12345678');
        expect(customer.email).toBe('sony@eannovate.com');
    });
});