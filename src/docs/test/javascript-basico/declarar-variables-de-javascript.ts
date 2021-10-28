const tests = (code: string) => {
    return `

		try {
			assert(!miNombre, "El código no tiene una variable llamada miNombre");
			solvedTest.push(0);
		}
		catch(e) {
			assert(false, "El código no tiene una variable llamada miNombre");
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
