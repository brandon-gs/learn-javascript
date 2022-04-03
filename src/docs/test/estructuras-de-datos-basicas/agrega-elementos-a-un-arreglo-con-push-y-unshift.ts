import { ProblemTest } from "..";
const tests = (code: string) => {
    return `

        assert.deepEqual(mezclarNumeros(['IV', 5, 'seis']), ['I', 2, 'tres', 'IV', 5, 'seis', 7, 'VIII', 9], "mezclarNumeros(['IV', 5, 'seis']) ahora debe devolver ['I', 2, 'tres', 'IV', 5, 'seis', 7, 'VIII', 9]");

		    solvedTest.push(0)

        assert(mezclarNumeros.toString().match(/\\.push/), "La función mezclarNumeros debe utilizar el método push()");
		solvedTest.push(1)

        assert(mezclarNumeros.toString().match(/\\.unshift/), "La función mezclarNumeros debe utilizar el método unshift()");
		solvedTest.push(2)

		`;
};

const instructions = [
    "<code>mezclarNumeros(['IV', 5, 'seis'])</code> ahora debe devolver <code>['I', 2, 'tres', 'IV', 5, 'seis', 7, 'VIII', 9]</code>",
    "La función <code>mezclarNumeros</code> debe ser utilizar el método <code>push()</code>",
    "La función <code>mezclarNumeros</code> debe utilizar el método <code>unshift()</code>",
];

const problem: ProblemTest = {
    tests,
    instructions,
    defaultCode: `function mezclarNumeros(arr) {
    // Cambia sólo el código debajo de esta línea

    // Cambia sólo el código encima de esta línea
    return arr;
}

console.log(mezclarNumeros(['IV', 5, 'seis']))
`,
};

export default problem;