import { prismaClient } from "../src/prisma-client.js";

describe("Execute SQL", () => {
    it("should be able to execute sql", async () => {
        await prismaClient.$connect();

        const id = Math.random();
        const name = "Sony";
        const result = await prismaClient.$executeRaw`INSERT INTO sample(id, name) VALUES(${id}, ${name})`;
        expect(result).toBe(1);

        await prismaClient.$disconnect();
    });
});