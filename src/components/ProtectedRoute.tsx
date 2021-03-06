import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import PageLoader from "./PageLoader";

interface ProtectedRouteProps {
    type: "public" | "private";
    children: React.ReactNode;
}

/** Redirecciona a otra página dependiendo de si es una ruta publica o privada
 * Si no se ha autenticado y la ruta es privada te redireccion a /
 * Si estas autenticado y la ruta es publica /problems (caso de login y register)
 */
export default function ProtectedRoute({
    type,
    children,
}: ProtectedRouteProps) {
    const auth = getAuth();
    const history = useHistory();

    const [loading, setLoading] = useState(localStorage.getItem("email") === undefined);

    useEffect(() => {
        let mounted = true;
        const { pathname } = history.location;
        onAuthStateChanged(auth, (user) => {
            if (user && type === "public" && pathname !== "/problems") {
                history.push("/problems");
            } else if (!user && type === "private" && pathname !== "/") {
                history.push("/");
            } else {
                if (mounted) {
                    setTimeout(() => {
                        if (loading) {
                            setLoading(false);
                        }
                    }, 2000);
                }
            }
        });
        return () => {
            mounted = false;
        };
    }, [history, type, auth, loading]);

    return loading ? (
        <PageLoader />
    ) : (
        <>{children}</>
    );
}
