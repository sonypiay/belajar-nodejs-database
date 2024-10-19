import { prismaClient } from "../src/prisma-client";

describe('Prisma Client', () => {
    it("should be able to aggregate data", async () => {
        const customer = await prismaClient.product.aggregate({
            _min: {
                price: true,
                stock: true
            },
            _max: {
                price: true,
                stock: true
            },
            _avg: {
                price: true,
                stock: true
            }
        });

        console.info(customer);
    });

    it("should be able to groupby data", async () => {
        const customer = await prismaClient.product.groupBy({
            by: ['category'],
            _min: {
                price: true,
                stock: true
            },
            _max: {
                price: true,
                stock: true
            },
            _avg: {
                price: true,
                stock: true
            }
        });

        console.info(customer);
    });

    it("should be able to groupby and having", async () => {
        const customer = await prismaClient.product.groupBy({
            by: ['category'],
            _min: {
                price: true,
                stock: true
            },
            _max: {
                price: true,
                stock: true
            },
            _avg: {
                price: true,
                stock: true
            },
            having: {
                price: {
                    _avg: {
                        gt: 2000
                    }
                }
            }
        });

        console.info(customer);
    });
});