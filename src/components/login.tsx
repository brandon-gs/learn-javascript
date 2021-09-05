import { Link } from "react-router-dom";
import imgLogin from "../assets/img/img-login.svg";

export const Login = () => {
    return (
        <div className="container-fluid color_bg">
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
                    <div className="col-12 col-sm-12 col-md-6 d-flex justify-content-center ">
                        <div className="card w-100">
                            <div className="card-body">
                                <h1 className="card-title text-center my-4">
                                    Bienvenido!
                                </h1>
                                <h3 className="card-title text-center my-4">
                                    Inicia Sesión con tu cuenta
                                </h3>
                                <form>
                                    <div className="input-group my-4">
                                        <span
                                            className="input-group-text justify-content-center w-35"
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
                                        />
                                    </div>
                                    <div className="input-group my-4">
                                        <span
                                            className="input-group-text justify-content-center w-35"
                                            id="password"
                                        >
                                            Contraseña
                                        </span>
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="******"
                                            aria-label="Password"
                                            aria-describedby="password"
                                        />
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <button
                                            type="button"
                                            className="btn btn-outline-primary mx-2 my-4"
                                        >
                                            Iniciar sesión
                                        </button>
                                        <Link
                                            to="/register"
                                            className="btn btn-outline-secondary my-4"
                                        >
                                            Registrarse
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
