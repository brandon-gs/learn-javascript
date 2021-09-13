import { useParams } from "react-router-dom";

export default function ProblemPage() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    const { course, problem } = useParams<ParamsProblemPage>();

    return (
        <div>
            <h3>Course: {course}</h3>
            <h3>Problem: {problem}</h3>
        </div>
    );
}

interface ParamsProblemPage {
    course: string;
    problem: string;
}
