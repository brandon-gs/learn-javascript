import LoginPage from "../pages/LoginPage";
import ProblemsPage from "../pages/ProblemsPage";
import RegisterPage from "../pages/RegisterPage";

interface RoutePage {
    path: string;
    component: () => JSX.Element;
}
/**
 * Arreglo que contiene todas las páginas
 * es necesario agregar path(ruta) y el component(componente a mostrar en esa ruta)
 */
const pages: RoutePage[] = [
    {
        path: "/",
        component: LoginPage,
    },
    {
        path: "/register",
        component: RegisterPage,
    },
    {
        path: "/problems",
        component: ProblemsPage,
    },
];

export default pages;
