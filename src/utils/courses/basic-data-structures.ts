import { CourseData, Problems } from "../courses";

export const basicDataStructuresProblems: Problems[] = [
    {
        problemName: "Usar un array para guardar una colección de datos",
        problemUri: "usar-un-array-para-guardar-una-coleccion-de-datos",
    },
    {
        problemName: "Accede a los contenidos de un arreglo utilizando la notación de corchetes",
        problemUri: "accede-a-los-contenidos-de-un-arreglo-utilizando-la-notacion-de-corchetes",
    }
];

export const basicJavascriptCourse: CourseData = {
    title: "Estructuras de datos básicas",
    titleUri: "estructuras-de-datos-basicas",
    description:
        "Los datos se pueden almacenar y acceder de muchas formas.También aprenderá a utilizar métodos JS útiles para acceder y manipular datos. \n\nEn este curso de Estructuras de datos básicas, aprenderá más sobre las diferencias entre matrices y objetos, y cuáles usar en diferentes situaciones.",
    problems: basicDataStructuresProblems,
};
