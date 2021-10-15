import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import Markdown from "markdown-to-jsx";
import courses, { CourseData } from "../utils/courses";
import StyledCodeMirror from "../components/StyledCodeMirror";
import useConsole from "../hooks/useConsole";
import { createContext, Script } from "vm";
import { strict as assert } from "assert";
import tests from "../docs/test";
import Instruction from "../components/Instruction";

export default function ProblemPage() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    const { consoleRef, addToConsole, clearConsole } = useConsole();
    const { course, problem } = useParams<ParamsProblemPage>();

    const currentTest = tests[course][problem];

    const [code, setCode] = useState<string>("");
    const [post, setPost] = useState<string>("");
    const [executed, setExecuted] = useState<boolean>(false);
    const [solvedTests, setSolvedTests] = useState<number[]>([]);

    const currentProblem = useMemo(
        () =>
            courses
                .filter(filterCurrentCourse(course))[0]
                .problems.filter(
                    (currentProblem) => currentProblem.problemUri === problem
                ),
        [course, problem]
    );

    const indexProblem = useMemo(() => {
        const currentCourse = courses.filter(filterCurrentCourse(course))[0];
        for (let x = 0; x < currentCourse.problems.length; x++) {
            if (currentCourse.problems[x].problemUri === problem) {
                return x;
            }
        }
        return 0;
    }, [course, problem]);

    // Show result in console
    const showResult = () => {
        let contextObj = {
            solvedTest: [],
            console: {
                log: (...args: any) => {
                    addToConsole(args);
                },
            },
            assert,
        };

        const codeWithTest =
            code +
            `
            ${currentTest.tests(code)}
		`;

        const script = new Script(codeWithTest);
        const vmContext = createContext(contextObj);
        clearConsole();
        try {
            addToConsole("// Ejecutando pruebas");
            script.runInContext(vmContext);
            addToConsole("// Pruebas completadas");
            setSolvedTests(vmContext.solvedTest);
            console.log("go to next problem: ", indexProblem + 1);
        } catch (e) {
            setSolvedTests(vmContext.solvedTest);
            addToConsole(e);
        }
        setExecuted(true);
    };

    // Add messages to console
    useEffect(() => {
        window.addEventListener("message", (e) => {
            if (e.data.log) {
                addToConsole(e.data.log);
            }
        });
    });

    // Load a default console message
    useEffect(() => {
        clearConsole();
        addToConsole("/**");
        addToConsole("* Su salida de prueba ira aquí");
        addToConsole("*/");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Load md file
    useEffect(() => {
        import(`../docs/${course}/${problem}.md`).then((res) => {
            fetch(res.default)
                .then((res) => res.text())
                .then((res) => setPost(res))
                .catch((res) => console.log("Error al cargar archivo md"));
        });
    }, [course, problem]);

    if (currentProblem.length === 0) {
        return <div></div>;
    }

    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "40% 60%",
                height: "100vh",
                maxHeight: "100vh",
            }}
        >
            <section
                id="information"
                style={{
                    gridRow: 1,
                    overflowY: "scroll",
                    padding: 8,
                    background: "#1b1b32",
                    color: "#FFF",
                }}
            >
                <h1 style={{ textAlign: "center", fontSize: 24 }}>
                    {currentProblem[0].problemName}
                </h1>
                <Markdown>{post}</Markdown>
                {currentTest.instructions.map(
                    (instruction: string, index: number) => {
                        return (
                            <Instruction
                                key={`instruction-${index}`}
                                executed={executed}
                                instruction={instruction}
                                index={index}
                                solvedTests={solvedTests}
                            />
                        );
                    }
                )}
                <button onClick={showResult} className="buttonTests">
                    Ejecutar pruebas
                </button>
            </section>
            <div style={{ display: "grid", gridTemplateRows: "72% 28%" }}>
                <section
                    id="editor"
                    style={{
                        height: "100%",
                        borderLeft: "solid 1px black",
                    }}
                >
                    <StyledCodeMirror code={code} setCode={setCode} />
                </section>
                <section
                    ref={consoleRef}
                    id="console"
                    style={{
                        borderTop: "solid 1px black",
                        borderLeft: "solid 1px black",
                        paddingTop: 8,
                        paddingLeft: 8,
                    }}
                ></section>
            </div>
        </div>
    );
}

interface ParamsProblemPage {
    course: string;
    problem: string;
}

const filterCurrentCourse = (course: string) => (currentCourse: CourseData) => {
    return currentCourse.titleUri === course;
};
