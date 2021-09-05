import { useState, SyntheticEvent } from "react";
import imgRegister from "../assets/img/img-register.svg";
import { getAuth, createUserWithEmailAndPassword } from "@firebase/auth";

interface iDataForm {
    email: string;
    password: string;
}

export const Register = () => {
    const [dataForm, setDataForm] = useState<iDataForm>({
        email: "",
        password: "",
    });

    const inputChange = (event: SyntheticEvent) => {
        let target = event.target as HTMLInputElement;
        setDataForm({
            ...dataForm,
            [target.name]: target.value,
        });
    };

    const sendData = (event: SyntheticEvent) => {
        event.preventDefault();
        const { email, password } = dataForm;
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(`Data firebase... ${JSON.stringify(user)}`);
                window.location.href = "/problems";
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                window.location.href = "/login";
            });
    };

    return (
        <div className="container-fluid color_bg">
            <div className="container d-flex justify-content-center align-items-center h_100">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 text-center my-4">
                        <img
                            src={imgRegister}
                            alt="Login"
                            width="400"
                            className="img-fluid"
                        />
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 d-flex justify-content-center">
                        <div className="card w-100">
                            <div className="card-body d-flex justify-content-center align-items-center">
                                <form onSubmit={sendData}>
                                    <h1 className="card-title text-center my-4">
                                        Bienvenido!
                                    </h1>
                                    <h4 className="card-title text-center my-4">
                                        Crea tu cuenta para comenzar
                                    </h4>
                                    <div className="input-group my-4">
                                        <span
                                            className="input-group-text justify-content-center w-35"
                                            id="email"
                                        >
                                            Correo
                                        </span>
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            placeholder="example@gmail.com"
                                            aria-label="Email"
                                            aria-describedby="email"
                                            required
                                            value={dataForm.email}
                                            onChange={inputChange}
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
                                            type="password"
                                            name="password"
                                            className="form-control"
                                            placeholder="******"
                                            aria-label="Password"
                                            aria-describedby="password"
                                            required
                                            value={dataForm.password}
                                            onChange={inputChange}
                                        />
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <button
                                            type="submit"
                                            className="btn btn-lg btn-outline-primary px-5 mt-4"
                                        >
                                            Crear cuenta
                                        </button>
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
