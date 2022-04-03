const tests = (code: string) => {
    const errorMessage =
        "La variable 'a' no es de tipo number o su valor no es igual a 7";

    return `
		try {
			assert(typeof a === "number" && a === 7, "${errorMessage}");
			solvedTest.push(0);
		}
		catch(e) {
			assert(false, "${errorMessage}");
		}

		`;
};

const instructions = [
    "Asigna el valor {7} a la variable {a}"
        .replaceAll("{", "<span><code>")
        .replaceAll("}", "</span></code>"),
];

const problem = {
    tests,
    instructions,
};

export default problem;
