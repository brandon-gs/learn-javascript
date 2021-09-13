import Course from "./Course";
import courses from "../utils/courses";
import "../styles/Problems.css";

export const Problems = () => {
    return (
        <>
            <h2>Cursos</h2>
            {courses.map((course) => (
                <Course
                    key={course.title}
                    title={course.title}
                    titleUri={course.titleUri}
                    description={course.description}
                    problems={course.problems}
                />
            ))}
        </>
    );
};
