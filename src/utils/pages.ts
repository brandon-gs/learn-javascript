import { Login } from "../components/Login";
import { Register } from "../components/Register";
import { Problems } from "../components/Problems";

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
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/problems",
    component: Problems,
  },
];

export default pages;
