import { ProblemTest } from "..";

const tests = (code: string) => {
    return `

    assert(typeof palindrome('eye') === 'boolean', "palindrome("eye") debe devolver un booleano.");
		solvedTest.push(0)

    assert(palindrome('eye') === true, "palindrome("eye") debe devolver true.");
		solvedTest.push(1)

    assert(palindrome('_eye') === true, "palindrome("_eye") debe devolver true.");
		solvedTest.push(2)

    assert(palindrome('A luna ese anula') === true, "palindrome("A luna ese anula") debe devolver true.");
		solvedTest.push(3)

    assert(palindrome('La ruta natural') === true, "palindrome("La ruta natural") debe devolver true.");
		solvedTest.push(4)

    assert(palindrome('Oso baboso') === true, "palindrome("Oso baboso") debe devolver true.");
		solvedTest.push(5)

    assert(palindrome('Yo soy') === true, "palindrome("Yo soy") debe devolver true.");
		solvedTest.push(6)

    assert(palindrome('Hola mundo') === false, "palindrome("Hola mundo") debe devolver false.");
		solvedTest.push(7)

    assert(palindrome('Estudio en la universidad') === false, "palindrome("Estudio en la universidad") debe devolver false.");
		solvedTest.push(8)
		`;
};

const instructions = [
    "<code>palindrome('eye')</code> debe devolver un booleano.",
    "<code>palindrome('eye')</code> debe devolver <code>true</code>",
    "<code>palindrome('_eye)</code> deve devoler<code>true</code>",
    "<code>palindrome('A luna ese anula')</code> debe devolver <code>true</code>",
    "<code>palindrome('La ruta natural')</code> debe devolver <code>true</code>",
    "<code>palindrome('Oso baboso')</code> debe devolver <code>true</code>",
    "<code>palindrome('Yo soy')</code> debe devolver <code>true</code>",
    "<code>palindrome('Hola mundo')</code> debe devolver <code>false</code>",
    "<code>palindrome('Estudio en la universidad')</code> debe devolver <code>false</code>",
];

const problem: ProblemTest = {
    tests,
    instructions,
    defaultCode: `function palindrome(str) {

    return true
}

console.log(palindrome("eye"))
`,
};

export default problem;
