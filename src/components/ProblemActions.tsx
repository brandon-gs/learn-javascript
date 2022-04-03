import React from "react";
import { useHistory } from "react-router";

interface Props {
    defaultCode: string;
    showResult: () => Promise<void>;
    setCode: (code: string) => void;
    nextLesson: string;
}

export default function ProblemActions({
    defaultCode,
    showResult,
    setCode,
    nextLesson,
}: Props) {
    const history = useHistory();

    return (
        <>
            <button onClick={showResult} className="buttonTests">
                Ejecutar pruebas
            </button>
            <button onClick={() => setCode(defaultCode)} className="buttonTests">
                Reiniciar código
            </button>
            {nextLesson !== "" ? (
                <button
                    onClick={() => history.push(nextLesson)}
                    className="buttonTests"
                >
                    Siguiente problema
                </button>
            ) : (
                <button
                    onClick={() => history.push("/problems")}
                    className="buttonTests"
                >
                    Regresar a los cursos
                </button>
            )}
        </>
    );
}
