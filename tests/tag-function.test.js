function tagFunction(array, ...args) {
    console.info(array);
    console.info(args);
}

test("tag function", () => {
    const name = "Sony";

    tagFunction`Hello ${name}, how are you?`;
    tagFunction`Bye ${name}, see you later!`;
});

test("tag function sql", () => {
    const name = "Sony";
    const age = 30;

    tagFunction`SELECT * FROM users WHERE name = ${name} AND age = ${age}`;
});