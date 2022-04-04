import { useState } from "react";
import { Link } from "react-router-dom";
import { Problems } from "../utils/courses";

interface CourseProps {
    title?: string;
    titleUri?: string;
    description?: string;
    problems?: Problems[];
    dbProblems?: { course: string; problem: string; user_email: string }[];
}

export default function Course({
    title = "Title prop",
    titleUri = "test",
    description = "Description prop",
    problems = [],
    dbProblems = [],
}: CourseProps) {
    const [showCourses, setShowCourses] = useState<boolean>(false);

    const updateShowCourse = () => setShowCourses((p) => !p);

    return (
        <div className="card" style={{ width: "30rem", marginTop: 16 }}>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <pre
                    className="card-text"
                    style={{ whiteSpace: "break-spaces" }}
                >
                    {description}
                </pre>
            </div>
            <div id={`accordion-${titleUri}`}>
                <button
                    className="list-group-item list-group-item-action count-exercise"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${titleUri}`}
                    aria-expanded="false"
                    aria-controls={`${titleUri}`}
                    onClick={() => updateShowCourse()}
                    style={showCourses ? { background: "#bdc3c7" } : {}}
                >
                    <span>{showCourses ? "Ocultar" : "Mostrar"} lecciones</span>
                    <span>
                        {dbProblems.filter((p) => p.course === titleUri).length}
                        /{problems.length}
                    </span>
                </button>
                <div id={titleUri} className="collapse">
                    {problems.map((problem) => {
                        const isResolved =
                            dbProblems.filter(
                                (dbProblem) =>
                                    dbProblem.problem === problem.problemUri
                            ).length > 0;
                        return (
                            <Link
                                to={`challenge/${titleUri}/${problem.problemUri}`}
                                key={problem.problemUri}
                                className={`list-group-item list-group-item-action ${
                                    isResolved ? "bg-success text-white" : ""
                                }`}
                            >
                                {problem.problemName}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
