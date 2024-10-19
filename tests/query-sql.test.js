import { prismaClient } from "../src/prisma-client.js";

describe("Query SQL", () => {
    it("should be able to query sql", async () => {
        await prismaClient.$connect();
        
        const id = 1;
        const results = await prismaClient.$queryRaw`SELECT * FROM sample WHERE id = ${id}`;

        for( const result of results ) {
            console.info(result.id);
            console.info(result.name);
        }

        await prismaClient.$disconnect();
    });
});