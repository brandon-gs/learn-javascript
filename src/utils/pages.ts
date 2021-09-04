import { Login } from "../components/login";

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
];

export default pages;
