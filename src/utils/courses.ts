import { basicJavascriptCourse } from "./courses/basic-javascript";

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
const courses: CourseData[] = [basicJavascriptCourse];

export default courses;
