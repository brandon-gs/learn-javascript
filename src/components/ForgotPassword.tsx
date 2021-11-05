import { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import useAlert from "../hooks/useAlert";

import imgForgot from "../assets/img/forgot_password.svg";
import Alert from "./Alert";

export const ForgotPassword = () => {
    const [email, setEmail] = useState("");

    const { content, visible, type, updateAlert } = useAlert(false);

    const sendEmail = async (e: any) => {
        e.preventDefault();
        try {
            const auth = getAuth();
            await sendPasswordResetEmail(auth, email);
            setEmail("");
            updateAlert("El correo se envió con exito", true, "success");
        } catch (e) {
            updateAlert(
                "El correo de recuperación no es válido",
                true,
                "danger"
            );
        }
    };

    return (
        <div className="container-fluid color_bg bg">
            <div className="container d-flex justify-content-center align-items-center h_100">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 text-center my-5">
                        <img
                            src={imgForgot}
                            alt="Login"
                            width="800"
                            className="img-fluid"
                        />
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 d-flex justify-content-center align-items-center ">
                        <div className="card w-100">
                            <div className="card-body">
                                <h1 className="card-title text-center fs-2 my-4">
                                    Recuperar contraseña!
                                </h1>
                                <h3 className="card-title text-center my-4">
                                    Ingresa tu correo
                                    <button
                                        type="button"
                                        className="btn btn-outline-dark btn-sm mx-2"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        title="Info"
                                    >
                                        ?
                                    </button>
                                    <div
                                        className="modal fade"
                                        id="exampleModal"
                                        tabIndex={-1}
                                        aria-labelledby="exampleModalLabel"
                                        aria-hidden="true"
                                    >
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5
                                                        className="modal-title fs-4"
                                                        id="exampleModalLabel"
                                                    >
                                                        Info
                                                    </h5>
                                                    <button
                                                        type="button"
                                                        className="btn-close fs-4"
                                                        data-bs-dismiss="modal"
                                                        aria-label="Close"
                                                    ></button>
                                                </div>
                                                <div className="modal-body fs-6">
                                                    El correo debe ser con el
                                                    que te registraste,
                                                    posteriormente revisa tu
                                                    correo para seguir las
                                                    indicaciones
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </h3>
                                <Alert
                                    type={type}
                                    visible={visible}
                                    content={content}
                                />
                                <form onSubmit={sendEmail}>
                                    <div className="input-group my-4">
                                        <span
                                            className="input-group-text justify-content-center align-items-center w-35"
                                            id="email"
                                        >
                                            Correo
                                        </span>
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="example@gmail.com"
                                            aria-label="Email"
                                            aria-describedby="email"
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                            value={email}
                                        />
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center my-4">
                                        <button
                                            type="submit"
                                            className="btn btn-primary mx-2"
                                        >
                                            Recuperar
                                        </button>
                                        <Link
                                            to="/"
                                            className="btn btn-secondary"
                                        >
                                            Iniciar sesión
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
