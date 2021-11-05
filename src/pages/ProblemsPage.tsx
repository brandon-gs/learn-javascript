import { Navbar } from "../components/Navbar";
import { Problems } from "../components/Problems";
import ProtectedRoute from "../components/ProtectedRoute";

export default function ProblemsPage() {
    return (
        <ProtectedRoute type="private">
            <Navbar />
            <div
                className="container d-flex flex-column justify-content-center align-items-center mb-5 mt-3"
                style={{ width: "30rem" }}
            >
                <h1>Javascript</h1>
                <img
                    src="/learn-javascript/img/javascript.jpeg"
                    alt="Logo javascript"
                    className="javascript-logo"
                ></img>
                <p>
                    Mientras que HTML y CSS controlan el contenido y el estilo
                    de una página, JavaScript se utiliza para hacerla
                    interactiva. En estos ejercicios de JavaScript, aprenderá
                    los fundamentos de JavaScript, incluidas variables,
                    matrices(arrays), objetos, bucles y funciones.
                </p>
                <p>
                    Una vez que tenga los fundamentos, aplicará ese conocimiento
                    creando algoritmos para manipular cadenas, factorializar
                    números, entre otros.
                </p>
                <p>
                    En el camino, también aprenderá dos estilos o paradigmas de
                    programación importantes: Programación orientada a objetos
                    (OOP) y Programación funcional (FP).
                </p>
                <Problems />
            </div>
        </ProtectedRoute>
    );
}
