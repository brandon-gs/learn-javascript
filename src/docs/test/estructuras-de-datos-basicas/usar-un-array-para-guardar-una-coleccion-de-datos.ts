const tests = (code: string) => {
    return `
        assert.strictEqual(Array.isArray(yourArray), true, "La variable 'yourArray' no es un arreglo");	
        assert(yourArray.filter((el) => typeof el === 'boolean').length >= 1, "El arreglo debe contener al menos un elemento boolean");
        assert(yourArray.filter((el) => typeof el === 'number').length >= 1, "El arreglo debe contener al menos un elemento number");
        assert(yourArray.filter((el) => typeof el === 'string').length >= 1, "El arreglo debe contener al menos un elemento string");	
        assert(yourArray.length === 5, "El arreglo no contiene 5 elementos");
		solvedTest.push(0)
		`;
};

const instructions = [
    'Hemos definido una variable llamada <code>yourArray</code>. Completa la sentencia asignando un arreglo de al menos 5 elementos de longitud a la variable <code>yourArray</code>. Tu arreglo debe contener al menos una cadena (string), un número (number) y un booleano (boolean).'
];

const problem = {
    tests,
    instructions,
};

export default problem;
