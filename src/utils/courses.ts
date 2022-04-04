import { paymentAlgoritmCourse } from './courses/payment-algoritms';
import { basicJavascriptCourse } from "./courses/basic-javascript";
import { basicJavascriptCourse as basicDataCourse } from "./courses/basic-data-structures";
import { basicAlgorithmScriptingCourse } from "./courses/basic-algorithm-scripting";
import { pooCourse } from "./courses/poo";
import { javascriptAlgorithsmAndDataStructuresProjectsCourse } from "./courses/javascript-algorithms-and-data-structures-projects"

// interfaces
export interface Problems {
    problemName: string;
    problemUri: string;
}

export interface CourseData {
    title: string;
    titleUri: string;
    description: string;
    problems: Problems[];
}

// Array with all courses
const courses: CourseData[] = [basicJavascriptCourse, basicDataCourse, basicAlgorithmScriptingCourse, pooCourse, javascriptAlgorithsmAndDataStructuresProjectsCourse];
export const paymentCourses: CourseData[] = [paymentAlgoritmCourse]

export default courses;
