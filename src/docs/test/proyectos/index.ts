import { ProblemTest } from "..";
import palindromos from "./comprobador-de-palindromos"

const paymentAlgoritmos: Record<string, ProblemTest> = {
  "comprobador-de-palindromos": palindromos,
  "cifrado-cesar": palindromos,
  "caja-registradora": palindromos,
  "conversor-de-numeros-romanos": palindromos,
  "validor-de-numeros-telefonicos": palindromos,
};

export default paymentAlgoritmos;