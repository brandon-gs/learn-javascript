const tests = (code: string) => {
    const errorMessage =
        "El código no tiene una variable definida con var llamada miNombre";

    return `

		try {
			assert(!miNombre && /var\\s+miNombre/.test("${code}"), "${errorMessage}");
			solvedTest.push(0);
		}
		catch(e) {
			assert(false, "${errorMessage}");
		}

		`;
};

const instructions = [
    'Utiliza la palabra clave <span class="code-terciary"><code>var</code></span> para crear una variable llamada <span class="code-terciary"><code>miNombre</code></span>',
];

const problem = {
    tests,
    instructions,
};

export default problem;
