import { Navbar } from "../components/Navbar";
import { Problems } from "../components/Problems";
import { Articles } from "../components/Articles";
import ProtectedRoute from "../components/ProtectedRoute";

import img_main from "../assets/img/img_main.svg";

export default function ProblemsPage() {
    return (
        <ProtectedRoute type="private">
            <Navbar />
            <div className="container my-3 p-5 rounded" style={{backgroundColor: "#ddd"}}>
                <div className="row">
                    <div className="col">
                        <h1 className="my-3">SCRIPTMASH</h1>
                        <p>Bienvenido a ScriptMash, la plataforma que te ayudará a aprender javascript de forma sencilla y gratuita, con instrucciones en <strong>español</strong> que te ayudará a comprender mejor los que se pide.</p>
                        <p>Una vez que tengas los fundamentos, tocará aplicar esos conocimientos creando algoritmos para manipular cadenas, factorializar números, entre otros ejecicios preparados para ti.</p>
                        <a href="#cursos" className="btn btn-primary color_bg">Comenzar</a>
                    </div>
                    <div className="col text-center">
                        <img src={img_main} alt="img" width="400"/>
                    </div>
                </div>
            </div>
            
            <div className="container p-5 mb-3 rounded" style={{backgroundColor: "#ddd"}}>
                <div className="row">
                    <div className="col-8 d-flex justify-content-center">
                        <div id="cursos">
                            <Problems />
                        </div>
                    </div>
                    <div className="col-4 d-flex justify-content-center">
                        <div id="articulos">
                            <Articles/>
                        </div>
                    </div>
                </div>
            </div>
        </ProtectedRoute>
    );
}
