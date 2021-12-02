import React from "react";
import { useHistory } from "react-router";

interface Props {
    showResult: () => Promise<void>;
    setCode: (code: string) => void;
    nextLesson: string;
}

export default function ProblemActions({
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
            <button onClick={() => setCode("")} className="buttonTests">
                Reiniciar código
            </button>
            <button
                onClick={() => history.push(nextLesson)}
                className="buttonTests"
            >
                Siguiente problema
            </button>
        </>
    );
}
