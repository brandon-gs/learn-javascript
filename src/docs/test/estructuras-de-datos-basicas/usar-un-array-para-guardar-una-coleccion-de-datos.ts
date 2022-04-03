const tests = (code: string) => {
    return `
        assert.strictEqual(Array.isArray(tuArray), true, "La variable 'tuArray' no es un arreglo");
        solvedTest.push(0)	
        assert(tuArray.filter((el) => typeof el === 'boolean').length >= 1, "El arreglo debe contener al menos un elemento boolean");
        solvedTest.push(1)
        assert(tuArray.filter((el) => typeof el === 'number').length >= 1, "El arreglo debe contener al menos un elemento number");
        solvedTest.push(2)
        assert(tuArray.filter((el) => typeof el === 'string').length >= 1, "El arreglo debe contener al menos un elemento string");	
        solvedTest.push(3)
        assert(tuArray.length === 5, "El arreglo no contiene 5 elementos");
		solvedTest.push(4)
		`;
};

const instructions = [
    'La variable tuArray debe ser un arreglo',
    'La variable tuArray debe contener al menos un elemento de tipo boolean',
    'La variable tuArray debe contener al menos un elemento de tipo number',
    'La variable tuArray debe contener al menos un elemento de tipo string',
    'La variable tuArray debe tener 5 elementos'
];

const problem = {
    tests,
    instructions,
    defaultCode: `const tuArray = [];
`,
};

export default problem;
