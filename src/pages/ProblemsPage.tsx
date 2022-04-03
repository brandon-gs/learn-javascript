import { Navbar } from "../components/Navbar";
import { Problems } from "../components/Problems";
import { Articles } from "../components/Articles";
import ProtectedRoute from "../components/ProtectedRoute";
import UnlockProjectLessons from "../components/UnlockProjectLessons";

import img_main from "../assets/img/img_main.svg";
import javascriptLogo from "../assets/img/javascript.jpeg";
import useUnlockedChallenges from "../hooks/useUnlockedChallenges";

export default function ProblemsPage() {
    // Allow to know if the user pays for the challenges
    const { unlockedChallenges, loading, getUnlockedChallenges } =
        useUnlockedChallenges();

    return (
        <ProtectedRoute type="private">
            <Navbar />
            
            <div className="container my-3 p-5 rounded " style={{ backgroundColor: "#ddd" }}>
            <div className="row">
                    <div className="col-sm-6 col-12">
                        <h1 className="my-3">SCRIPTMASH</h1>
                        <p>
                            Bienvenido a ScriptMash, la plataforma que te
                            ayudará a aprender javascript de forma sencilla y
                            gratuita, con instrucciones en{" "}
                            <strong>español</strong> que te ayudará a comprender
                            mejor los que se pide.
                        </p>
                        <p>
                            Una vez que tengas los fundamentos, tocará aplicar
                            esos conocimientos creando algoritmos para manipular
                            cadenas, factorializar números, entre otros
                            ejecicios preparados para ti.
                        </p>
                        <a href="#cursos" className="btn btn-primary color_bg">
                            Comenzar
                        </a>
                    </div>
                    <div className="col-sm-6 col-12 text-center">
                        <img src={img_main} className="img-fluid" alt="img" width="400" />
                    </div>
                </div>
            </div>
            <div
                className="container p-5 mb-3 rounded"
                style={{ backgroundColor: "#ddd" }}
            >
                <div className="row justify-content-center">
                    <div className="col-sm-8 col-12 d-flex justify-content-center mb-4">
                        <div id="cursos">
                            <div className="d-flex flex-column align-items-center">
                                <h1
                                    className="h3 text-center"
                                    style={{
                                        fontWeight: "bold",
                                        maxWidth: 320,
                                    }}
                                >
                                    Javascript algoritmos y estructuras de datos
                                </h1>
                                <img
                                    src={javascriptLogo}
                                    alt="Logo javascript"
                                    className="javascript-logo"
                                ></img>
                            </div>
                            <Problems />
                            {Boolean(!unlockedChallenges && !loading) && (
                                <UnlockProjectLessons
                                    updatePayment={getUnlockedChallenges}
                                />
                            )}
                        </div>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <div id="articulos">
                            <Articles />
                        </div>
                    </div>
                </div>
            </div>
        </ProtectedRoute>
    );
}
