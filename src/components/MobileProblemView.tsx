import { CSSProperties } from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import NoMobileVersion from "../assets/img/no-mobile-version.svg";

const styles: Record<string, CSSProperties> = {
    imageContainerStyles: {
        overflow: "hidden",
        width: "100%",
        height: "11rem",
        paddingBottom: "7rem",
        marginBottom: "1rem",
        position: "relative",
    },
    imageStyles: {
        position: "relative",
        left: "50%",
        transform: "translateX(-50%)",
        maxWidth: "200%",
        display: "inline-block",
    },
};

export default function MobileProblemView() {
    return (
        <div className="container mt-4">
            <Link to="/" className="btn btn-outline-secondary">
                <BiArrowBack />
                <span className="ms-2">Regresar</span>
            </Link>
            <h1 className="h1 text-center mt-5">
                Necesitaras una computadora para visitar esta sección
            </h1>
            <p className="h6 text-center mt-5 mx-1 mb-5">
                Cuando se trata de programar, no hay sustituto para un teclado y
                un cursor. Para experimentar nuestros con nuestras lecciones
                interactivas en su totalidad, inicie sesión con un navegador de
                escritorio.
            </p>
            <div style={styles.imageContainerStyles}>
                <img
                    src={NoMobileVersion}
                    alt="imagen decorativa"
                    style={styles.imageStyles}
                />
            </div>
        </div>
    );
}
