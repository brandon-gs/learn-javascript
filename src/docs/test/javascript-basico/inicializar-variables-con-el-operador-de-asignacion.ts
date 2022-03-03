const tests = (pcode: string) => {
    const code = pcode.replaceAll("\n", " ");

    return `

            assert(/var\\s+a\\s*=\\s*9(\\s*;?\\s*)$/.test("${code}"), "No esta inicializada la variable a con el valor de 9");
            solvedTest.push(0)

		`;
};

const instructions = [
    "Define una variable {a} con {var} e inicialízala con un valor de {9}.",
];

const problem = {
    tests,
    instructions: instructions.map((instruction) =>
        instruction
            .replaceAll("{", "<span><code>")
            .replaceAll("}", "</span></code>")
    ),
};

export default problem;
