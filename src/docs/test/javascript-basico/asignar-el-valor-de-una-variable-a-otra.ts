const tests = (pcode: string) => {
    const code = pcode.replaceAll("\n", " ");

    const aUndeclared = "La variable 'a' no ha sido creada";
    const bUndeclared = "La variable 'b' no ha sido creada";
    const notSameType =
        "La variable 'a' no es del mismo tipo que la variable 'b'";
    const notSameValue =
        "La variable 'a' no tiene el mismo valor de la variable 'b'";

    const assignError =
        "La variable 'a' debe ser asignada a la variable 'b'  utilizando '='";

    return `

		try {
			assert(/var\\s+a/g.test("${code}"), "${aUndeclared}");
		}
		catch(e) {
			assert(false, "${aUndeclared}");
		}

		try {
			assert(/var\\s+b/g.test("${code}"), "${bUndeclared}");
		}
		catch(e) {
			assert(false, "${bUndeclared}");
		}

        assert(typeof a === typeof b, "${notSameType}");


        try {
            assert(/b\\s*=\\s*a\\s*/g.test("${code}"), "${assignError}");
        }
		catch(e) {
			assert(false, "${assignError}");
		}

        assert(a === b, "${notSameValue}");

		solvedTest.push(0);

		`;
};

const instructions = [
    "Crea una variable llamada {a} y asigna su contenido a la variable {b}"
        .replaceAll("{", "<span><code>")
        .replaceAll("}", "</span></code>"),
];

const problem = {
    tests,
    instructions,
};

export default problem;
