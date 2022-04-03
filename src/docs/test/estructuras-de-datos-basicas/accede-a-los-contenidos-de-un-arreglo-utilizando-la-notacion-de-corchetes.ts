import { ProblemTest } from "..";
const tests = (code: string) => {
    return `

        assert.strictEqual(myArray[0], 'a', "El valor de myArray[0] debería ser igual a la letra 'a'");
		solvedTest.push(0)

        assert.notStrictEqual(myArray[1], 'b' , "El valor de myArray[1] debería ser diferente a la letra 'b'");
		solvedTest.push(1)

        assert.strictEqual(myArray[2], 'c', "El valor de myArray[2] debería ser igual a la letra 'c'");
		solvedTest.push(2)

        assert.strictEqual(myArray[3], 'd', "El valor de myArray[3] debería ser igual a la letra 'd'");
		solvedTest.push(3)

		`;
};

const instructions = [
    "<code>myArray[0]</code> debe ser igual a la letra <code>a</code>",
    "<code>myArray[1]</code> no debe ser igual a la letra <code>b</code>",
    "<code>myArray[2]</code> debe ser igual a la letra <code>c</code>",
    "<code>myArray[3]</code> debe ser igual a la letra <code>d</code>",
];

const problem: ProblemTest = {
    tests,
    instructions,
    defaultCode: `const myArray = ['a', 'b', 'c', 'd'];
// Cambia sólo el código debajo de esta línea
`,
};

export default problem;
