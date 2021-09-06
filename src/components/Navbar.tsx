import { getAuth, signOut } from "firebase/auth";

export const Navbar = () => {
    const logOut = () => {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                console.log("logout");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <header>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">
                        Aprende JavaScript
                    </span>
                    <div className="d-flex">
                        <button
                            className="btn btn-outline-warning"
                            type="button"
                            onClick={logOut}
                        >
                            Cerrar sesión
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
};
