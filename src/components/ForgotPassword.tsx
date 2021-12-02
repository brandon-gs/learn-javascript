import { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import useAlert from "../hooks/useAlert";
import { Tooltip } from "react-tippy";

import "react-tippy/dist/tippy.css";
import imgForgot from "../assets/img/forgot_password.svg";
import tooltip from "../assets/img/tooltip.png";
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
                                    <span className="mx-2">
                                        <Tooltip
                                            title="Coloca el correo con el que te registraste!"
                                            position="top"
                                            trigger="mouseenter"
                                            animation="shift"
                                        >
                                            <img
                                                src={tooltip}
                                                alt="FreePick"
                                                width={24}
                                            />
                                        </Tooltip>
                                    </span>
                                </h1>
                                <Alert
                                    content={content}
                                    visible={visible}
                                    type={type}
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
