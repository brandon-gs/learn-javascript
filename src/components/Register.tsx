import imgRegister  from "../assets/img/img-register.svg";

export const Register = () => {
    return(
        <div className="container-fluid color_bg">
            <div className="container d-flex justify-content-center align-items-center h_100">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 text-center my-4">
                        <img src={imgRegister} alt="Login" width="400" className="img-fluid"/>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 d-flex justify-content-center">
                        <div className="card w-100">
                            <div className="card-body d-flex justify-content-center align-items-center">
                                <form>
                                <h1 className="card-title text-center my-4">Bienvenido!</h1>
                                <h4 className="card-title text-center my-4">Crea tu cuenta para comenzar</h4>
                                    <div className="input-group my-4">
                                        <span className="input-group-text justify-content-center w-35" id="email">Correo</span>
                                        <input type="email" className="form-control" placeholder="example@gmail.com" aria-label="Email" aria-describedby="email"/>
                                    </div>
                                    <div className="input-group my-4">
                                        <span className="input-group-text justify-content-center w-35" id="password">Contraseña</span>
                                        <input type="email" className="form-control" placeholder="******" aria-label="Password" aria-describedby="password"/>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <button type="button" className="btn btn-lg btn-outline-primary px-5 mt-4">Crear cuenta</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}