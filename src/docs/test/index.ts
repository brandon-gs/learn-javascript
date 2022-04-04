import javascriptBasico from "./javascript-basico";
import estructurasDeDatos from "./estructuras-de-datos-basicas";
import paymentAlgoritmos from "./payment/algoritmos";
import proyectos from "./proyectos/";

export interface ProblemTest {
    tests: (code: string) => string;
    instructions: string[];
    defaultCode?: string
    youtubeId?: string
}

const tests: Record<string, Record<string, ProblemTest>> = {
    "javascript-basico": javascriptBasico,
    "estructuras-de-datos-basicas": estructurasDeDatos,
    "algoritmos": paymentAlgoritmos,
    "proyectos": proyectos
};

export default tests;
