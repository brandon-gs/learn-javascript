import LoginPage from "../pages/LoginPage";
import ProblemPage from "../pages/ProblemPage";
import ProblemsPage from "../pages/ProblemsPage";
import RegisterPage from "../pages/RegisterPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import CreatePost from "../pages/CreatePost";
import ReadPosts from "../pages/ReadPosts";
import ReadPost from "../pages/ReadPost";

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
        path: "/forgotPassword",
        component: ForgotPasswordPage,
    },
    {
        path: "/problems",
        component: ProblemsPage,
    },
    {
        path: "/challenge/:course/:problem",
        component: ProblemPage,
    },
    {
        path: "/create/post",
        component: CreatePost
    },
    {
        path: "/posts",
        component: ReadPosts
    },
    {
        path: "/post/:id",
        component: ReadPost
    }
];

export default pages;
