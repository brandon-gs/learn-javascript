import javascriptBasico from "./javascript-basico";
import estructurasDeDatos from "./estructuras-de-datos-basicas";
import paymentAlgoritmos from "./payment/algoritmos";

export interface ProblemTest {
    tests: (code: string) => string;
    instructions: string[];
    defaultCode?: string
}

const tests: Record<string, Record<string, ProblemTest>> = {
    "javascript-basico": javascriptBasico,
    "estructuras-de-datos-basicas": estructurasDeDatos,
    "algoritmos": paymentAlgoritmos,
};

export default tests;
