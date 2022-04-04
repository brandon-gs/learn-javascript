import React from "react";
import { useHistory } from "react-router";

interface Props {
    youtubeId?: string;
    defaultCode: string;
    showResult: () => Promise<void>;
    setCode: (code: string) => void;
    nextLesson: string;
}

export default function ProblemActions({
    youtubeId,
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
            <button
                onClick={() => setCode(defaultCode)}
                className="buttonTests"
            >
                Reiniciar código
            </button>
            {youtubeId && (
                <button
                    className="buttonTests"
                    data-bs-toggle="modal"
                    data-bs-target="#videoModal"
                >
                    Ver vídeo de ayuda
                </button>
            )}
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
