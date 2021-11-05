import { FormEvent, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import imgLogin from "../assets/img/img-login.svg";
import useAlert from "../hooks/useAlert";
import Alert from "./Alert";

export const Login = () => {
    // Firebase
    const auth = getAuth();

    // State
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    // React router dom
    const history = useHistory();

    // Alert state
    const { content, visible, type, updateAlert } = useAlert(false);

    const login = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            history.push("/problems");
        } catch (e) {
            updateAlert("Usuario o contraseña incorrectos", true, "danger");
        }
    };

    return (
        <div className="container-fluid color_bg bg">
            <div className="container d-flex justify-content-center align-items-center h_100">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 text-center my-5">
                        <img
                            src={imgLogin}
                            alt="Login"
                            width="800"
                            className="img-fluid"
                        />
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 d-flex justify-content-center align-items-center ">
                        <div className="card w-100">
                            <div className="card-body">
                                <h1 className="card-title text-center my-4">
                                    Bienvenido!
                                </h1>
                                <h3 className="card-title text-center my-4">
                                    Inicia Sesión con tu cuenta
                                </h3>
                                <Alert
                                    type={type}
                                    visible={visible}
                                    content={content}
                                />
                                <form onSubmit={login}>
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
                                        />
                                    </div>
                                    <div className="input-group my-4">
                                        <span
                                            className="input-group-text justify-content-center align-items-center w-35"
                                            id="password"
                                        >
                                            Contraseña
                                        </span>
                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder="******"
                                            aria-label="Password"
                                            aria-describedby="password"
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="d-flex justify-content-around my-4">
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                        >
                                            Iniciar sesión
                                        </button>
                                        <Link
                                            to="/register"
                                            className="btn btn-secondary"
                                        >
                                            Registrarse
                                        </Link>
                                        <Link
                                            to="/forgotPassword"
                                            className="btn btn-warning"
                                        >
                                            Recuperar contraseña
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
