import { useState } from "react";
import { Link } from "react-router-dom";
import { Problems } from "../utils/courses";

interface CourseProps {
    title?: string;
    titleUri?: string;
    description?: string;
    problems?: Problems[];
}

export default function Course({
    title = "Title prop",
    titleUri = "test",
    description = "Description prop",
    problems = [],
}: CourseProps) {
    const [showCourses, setShowCourses] = useState<boolean>(false);

    const updateShowCourse = () => setShowCourses((p) => !p);

    return (
        <div className="card" style={{ width: "30rem" }}>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <pre
                    className="card-text"
                    style={{ whiteSpace: "break-spaces" }}
                >
                    {description}
                </pre>
            </div>
            <div id="accordion">
                <button
                    className="list-group-item list-group-item-action count-exercise"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                    onClick={() => updateShowCourse()}
                    style={showCourses ? { background: "#bdc3c7" } : {}}
                >
                    <span>{showCourses ? "Ocultar" : "Mostrar"} cursos</span>
                    <span>1/{problems.length}</span>
                </button>
                {showCourses && (
                    <div
                        id="collapseOne"
                        className="collapse"
                        aria-labelledby="headingOne"
                        data-parent="#accordion"
                    >
                        {problems.map((problem) => (
                            <Link
                                to={`challenge/${titleUri}/${problem.problemUri}`}
                                key={problem.problemUri}
                                className="list-group-item list-group-item-action"
                            >
                                {problem.problemName}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
