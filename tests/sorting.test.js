import { prismaClient } from "../src/prisma-client.js";

describe("Prisma Client", () => {
    it("should be able to find many with page", async () => {
        const customer = await prismaClient.customer.findMany({
            skip: 0,
            take: 10,
            orderBy: [
                {
                    name: 'desc',
                }
            ],
        });

        console.info(customer);
    });
})