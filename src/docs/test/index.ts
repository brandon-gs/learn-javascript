import javascriptBasico from "./javascript-basico";
import estructurasDeDatos from "./estructuras-de-datos-basicas";

export interface ProblemTest {
    tests: (code: string) => string;
    instructions: string[];
}

const tests: Record<string, Record<string, ProblemTest>> = {
    "javascript-basico": javascriptBasico,
    "estrucutras-de-datos-basicas": estructurasDeDatos,
};

export default tests;
