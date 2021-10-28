import { getAuth, signOut } from "firebase/auth";
import { Link } from "react-router-dom";

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
        <>
            <header>
                <nav className="navbar navbar-dark color_bg fixed-top">
                    <div className="container-fluid">
                        <Link className="nav-link active" to="/">
                            <span className="navbar-brand mb-0 h1">
                                Aprende JavaScript
                            </span>
                        </Link>
                        <div className="d-flex">
                            <button
                                className="btn btn-warning"
                                type="button"
                                onClick={logOut}
                            >
                                Cerrar sesión
                            </button>
                        </div>
                    </div>
                </nav>
            </header>
            <div style={{ height: 48 }} />
        </>
    );
};
