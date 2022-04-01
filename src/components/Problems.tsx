import Course from "./Course";
import courses, { paymentCourses } from "../utils/courses";
import "../styles/Problems.css";
import { useEffect, useState } from "react";
import CoursesService from "../services/courses";
import useUnlockedChallenges from "../hooks/useUnlockedChallenges";

export const Problems = () => {
    const [currentCourses, setCurrentCourses] = useState(courses);

    const [problems, setProblems] = useState<
        { course: string; problem: string; user_email: string }[]
    >([]);

    const { unlockedChallenges } = useUnlockedChallenges();

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

    useEffect(() => {
        if (unlockedChallenges) {
            setCurrentCourses(courses.concat(paymentCourses));
        }
    }, [unlockedChallenges]);

    return (
        <>
            <h2 className="text-center">Cursos</h2>

            <div className="row">
                <div className="col d-flex justify-content-center">
                    <div>
                        {currentCourses.map((course) => (
                            <Course
                                key={course.title}
                                title={course.title}
                                titleUri={course.titleUri}
                                description={course.description}
                                problems={course.problems}
                                dbProblems={problems}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
