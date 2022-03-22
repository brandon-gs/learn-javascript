const tests = (code: string) => {
    return `

		`;
};

const instructions = [
    "Crea una función que tome dos o más arrays y devuelva un array de sus diferencias. La array que se devuelve debe contener solo valores únicos(no duplicados).",
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
