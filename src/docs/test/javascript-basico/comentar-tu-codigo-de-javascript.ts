const tests = (code: string) => {
    const singleCode = code.replace(/\n/g, " ");
    return `
		assert("${singleCode}".match(/(\\/\\/)...../g), "El código no contiene un comentario de una sola línea");
		solvedTest.push(0)
		assert("${singleCode}".match(/(\\/\\*)([^\\/]{5,})(=?\\*\\/)/gm), "El código no contiene un comentario multilínea");
		solvedTest.push(1)
		`;
};

const instructions = [
    'Debes crear un comentario de tipo <span class="code-terciary"><code>//</code></span> que contenga al menos cinco letras.',
    'Debes crear un comentario de tipo <span class="code-terciary"><code>/* */</code></span> que contenga al menos cinco letras.',
];

const problem = {
    tests,
    instructions,
};

export default problem;
