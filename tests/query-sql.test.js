import { prismaClient } from "../src/prisma-client.js";

describe("Query SQL", () => {
    it("should be able to query sql", async () => {
        const id = 1;
        const name = "Sony";
        const result = await prismaClient.$executeRaw`INSERT INTO sample(id, name) VALUES(${id}, ${name})`;

        expect(result).toBe(1);
    });
});