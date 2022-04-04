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
    "inicializar-variables-con-el-operador-de-asignacion": inicializarVariablesConElOperadorDeAsignacion,
    "entendiendo-las-variables-no-inicializadas": asignarElValorDeUnaVariableAOtra,
    "sensibilidad-a-mayusculas-y-minusculas-en-las-variables": asignarElValorDeUnaVariableAOtra,
    "sumar-dos-numeros-con-javascript": asignarElValorDeUnaVariableAOtra,
    "restar-un-numero-de-otro-con-javascript": asignarElValorDeUnaVariableAOtra,
    "multiplicar-dos-numeros-con-javascript": asignarElValorDeUnaVariableAOtra,
    "dividir-un-numero-entre-otro-con-javascript": asignarElValorDeUnaVariableAOtra,
    "incrementar-un-numero-con-javascript": asignarElValorDeUnaVariableAOtra,
    "decrementar-un-numero-con-javascript": asignarElValorDeUnaVariableAOtra,
    "crear-numeros-decimales-con-javascript": asignarElValorDeUnaVariableAOtra,
    "multiplicar-dos-decimales-con-javascript": asignarElValorDeUnaVariableAOtra,
    "dividir-un-decimal-entre-otro-con-javascript": asignarElValorDeUnaVariableAOtra,
    "buscar-el-residuo-en-javascript": asignarElValorDeUnaVariableAOtra,
    "asignacion-compuesta-con-suma": asignarElValorDeUnaVariableAOtra,
    "asignacion-compuesta-con-resta": asignarElValorDeUnaVariableAOtra,
    "asignacion-compuesta-con-multiplicaciones": asignarElValorDeUnaVariableAOtra,
    "asignacion-compuesta-con-division": asignarElValorDeUnaVariableAOtra,
    "declarar-variables-tipo-string": asignarElValorDeUnaVariableAOtra,
    "mostrar-comillas-en-string": asignarElValorDeUnaVariableAOtra,
    "secuencias-de-escape-en-string": asignarElValorDeUnaVariableAOtra,
    "concatenar-strings-con-el-operador-de-suma": asignarElValorDeUnaVariableAOtra,
    "concatenar-strings-con-el-operador-suma-e-igual": asignarElValorDeUnaVariableAOtra,
};


export default javascriptBasico;
