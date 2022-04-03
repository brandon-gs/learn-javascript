import { ProblemTest } from "..";
import comentarTuCodigoDeJavascript from "./comentar-tu-codigo-de-javascript";
import declararVariables from "./declarar-variables-de-javascript";
import guardarValoresConElOperadorDeAsignacion from "./guardar-valores-con-el-operador-de-asignacion";
import asignarElValorDeUnaVariableAOtra from "./asignar-el-valor-de-una-variable-a-otra";
import inicializarVariablesConElOperadorDeAsignacion from "./inicializar-variables-con-el-operador-de-asignacion"

const javascriptBasico: Record<string, ProblemTest> = {
    "comentar-tu-codigo-de-javascript": comentarTuCodigoDeJavascript,
    "declarar-variables-de-javascript": declararVariables,
    "guardar-valores-con-el-operador-de-asignacion":
        guardarValoresConElOperadorDeAsignacion,
    "asignar-el-valor-de-una-variable-a-otra": asignarElValorDeUnaVariableAOtra,
    "inicializar-variables-con-el-operador-de-asignacion": inicializarVariablesConElOperadorDeAsignacion
};

export default javascriptBasico;
