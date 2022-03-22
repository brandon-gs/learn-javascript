import React from "react";
import StripeForm from "./StripeForm";

interface UnlockProjectLessonsProps {
    updatePayment: () => void;
}

function UnlockProjectLessons({ updatePayment }: UnlockProjectLessonsProps) {
    return (
        <div className="card" style={{ width: "30rem", marginTop: 8 }}>
            <div className="card-body">
                <h5 className="card-title">Preparación para entrevista de programación</h5>
                <pre
                    className="card-text"
                    style={{ whiteSpace: "break-spaces" }}
                >
                    Si está buscando ejercicios de programación con el objetivo
                    de prepararse para su próxima entrevista de trabajo, esta
                    sección es para usted. Esta sección contiene desafíos de
                    codificación que ponen a prueba su conocimiento de
                    algoritmos y estructuras de datos.
                </pre>
            </div>
            <StripeForm updatePayment={updatePayment} />
        </div>
    );
}

export default UnlockProjectLessons;
