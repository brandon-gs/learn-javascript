import { getAuth, signOut } from "firebase/auth";
import { Link } from "react-router-dom";

export const Navbar = () => {
    const logOut = () => {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                localStorage.removeItem("email");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <header>
                <nav className="navbar navbar-dark navbar-expand-lg color_bg fixed-top">
                    <div className="container-fluid container">
                        <Link className="nav-link active" to="/">
                            <span className="navbar-brand mb-0 h1">
                                ScriptMash
                            </span>
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarScroll"
                            aria-controls="navbarScroll"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarScroll"
                        >
                            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"></ul>
                            <div className="d-flex">
                                <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link active"
                                            to="/problems"
                                            tabIndex={-1}
                                            aria-disabled="true"
                                        >
                                            Problemas
                                        </Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <span
                                            className="nav-link dropdown-toggle active"
                                            id="navbarScrollingDropdown"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Menú
                                        </span>
                                        <ul
                                            className="dropdown-menu"
                                            aria-labelledby="navbarScrollingDropdown"
                                        >
                                            <li>
                                                <Link
                                                    className="dropdown-item"
                                                    to="/create/post"
                                                >
                                                    Crear artículo
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    className="dropdown-item"
                                                    to="/posts"
                                                >
                                                    Ver artículos
                                                </Link>
                                            </li>
                                            {localStorage.getItem("email") && (
                                                <>
                                                    <li>
                                                        <hr className="dropdown-divider" />
                                                    </li>
                                                    <li>
                                                        <Link
                                                            className="dropdown-item"
                                                            to="/"
                                                            onClick={logOut}
                                                        >
                                                            Cerrar sesión
                                                        </Link>
                                                    </li>
                                                </>
                                            )}
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>

                <div style={{ height: 48 }} />
            </header>
        </>
    );
};
