const tests = (pcode: string) => {
    const code = pcode.replaceAll("\n", " ");

    const aUndeclared = "La variable 'a' no ha sido creada";
    const bUndeclared = "La variable 'b' no ha sido creada";
    const notSameType = "La variable 'a' no tiene el valor de 7";
    const assignError =
        "La variable 'a' debe ser asignada a la variable 'b'  utilizando '='";

    return `

		try {
			assert(/var\\s+a/g.test("${code}"), "${aUndeclared}");
            solvedTest.push(0)
		}
		catch(e) {
			assert(false, "${aUndeclared}");
		}

		

        assert(a === 7, "${notSameType}");
        solvedTest.push(1)

        try {
			assert(/var\\s+b/g.test("${code}"), "${bUndeclared}");
            solvedTest.push(2)
		}
		catch(e) {
			assert(false, "${bUndeclared}");
		}

        try {
            assert(/b\\s*=\\s*a\\s*/g.test("${code}"), "${assignError}");
            solvedTest.push(3)
        }
		catch(e) {
			assert(false, "${assignError}");
		}

        solvedTest.push(4)

		`;
};

const instructions = [
    "Crea una variable llamada {a}",
    "Asigna el valor de {7} a la variable {a}",
    "Crea una variable llamada {b}",
    "Asigna el contenido de la variable {a} a la variable {b}",
];

const problem = {
    tests,
    instructions: instructions.map((instruction) =>
        instruction
            .replaceAll("{", "<span><code>")
            .replaceAll("}", "</span></code>")
    ),
    youtubeId: "R2EzNeN2rzE"
};

export default problem;
