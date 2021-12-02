import Course from "./Course";
import courses from "../utils/courses";
import "../styles/Problems.css";
import { useEffect, useState } from "react";
import CoursesService from "../services/courses";

export const Problems = () => {
    const [problems, setProblems] = useState<
        { course: string; problem: string; user_email: string }[]
    >([]);

    useEffect(() => {
        const getResolvedProblems = async () => {
            const email = localStorage.getItem("email");
            if (email) {
                const problems = await CoursesService.getByEmail(email);
                setProblems(problems);
            }
        };

        getResolvedProblems();
    }, []);

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
                    dbProblems={problems}
                />
            ))}
        </>
    );
};
