import javascriptBasico from "./javascript-basico";

export interface ProblemTest {
    tests: (code: string) => string;
    instructions: string[];
}

const tests: Record<string, Record<string, ProblemTest>> = {
    "javascript-basico": javascriptBasico,
};

export default tests;
