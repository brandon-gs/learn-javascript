import { useEffect, useMemo, useRef, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import courses, { CourseData } from "../utils/courses";
import StyledCodeMirror from "../components/StyledCodeMirror";
import useConsole from "../hooks/useConsole";
import { createContext, Script } from "vm";
import { strict as assert } from "assert";
import tests from "../docs/test";
import { Navbar } from "../components/Navbar";
import CoursesService, { Course } from "../services/courses";
import "../styles/ProblemsPage.css";
import ProtectedRoute from "../components/ProtectedRoute";
import Console from "../components/Console";
import NextProblemModal from "../components/NextProblemModal";
import ListInstructions from "../components/ListInstructions";
import ProblemActions from "../components/ProblemActions";
import LessonInformation from "../components/LessonInformation";

export default function ProblemPage() {
    const { consoleRef, addToConsole, clearConsole } = useConsole();
    const informationRef = useRef<any>();

    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    const { course, problem } = useParams<ParamsProblemPage>();

    // Allow go to other page
    const history = useHistory();

    // Current test for the challenge
    const currentTest = tests[course][problem];

    // Modal State
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isLoadingModal, setIsLoadingModal] = useState<boolean>(false);
    const openModal = () => setIsOpen(true);
    const enableLoadingModal = () => setIsLoadingModal(true);
    const disableLoadingModal = () => setIsLoadingModal(false);

    // Code state
    const [code, setCode] = useState<string>("");

    // Current Lesson state
    const [executed, setExecuted] = useState<boolean>(false);
    const [post, setPost] = useState<string>("");

    // Next lesson state
    const [nextLesson, setNextLesson] = useState<string>("");
    const [solvedTests, setSolvedTests] = useState<number[]>([]);

    // Problems solved by the user, thess data are obtained from database
    const [userProblems, setUserProblems] = useState<Course[]>([]);

    // Scroll top information lesson section
    const scrollTopInformationLesson = () => {
        // Scroll lesson to top
        if (informationRef.current) {
            informationRef.current.scrollTop = 0;
        }
    };

    // Obtain the current problem base on the URL params
    const currentProblem = useMemo(
        () =>
            courses
                .filter(filterCurrentCourse(course))[0]
                .problems.filter(
                    (currentproblem) => currentproblem.problemUri === problem
                ),
        [course, problem]
    );

    // Get the index of the problem based on the current problem that was obtained from the URL params
    const indexProblem = useMemo(() => {
        const currentCourse = courses.filter(filterCurrentCourse(course))[0];
        for (let x = 0; x < currentCourse.problems.length; x++) {
            if (currentCourse.problems[x].problemUri === problem) {
                return x;
            }
        }
        return 0;
    }, [course, problem]);

    // Restart the console and put a default message
    const firstConsoleMessage = () => {
        clearConsole();
        addToConsole("/**");
        addToConsole("* Su salida de prueba ira aquí");
        addToConsole("*/");
    };

    // Show result in console
    const showResult = async () => {
        // Config javascript engine and replace some functions
        let contextObj = {
            solvedTest: [],
            console: {
                log: (...args: any) => {
                    addToConsole(args);
                },
            },
            assert,
        };

        // Concatenate the user's code and test of the current problem code
        const codeWithTest =
            code +
            `
            ${currentTest.tests(code)}
		    `;

        // Create a new script with the user's code + test's code
        const script = new Script(codeWithTest);

        // Create a virtual javascript context with our configuration
        const vmContext = createContext(contextObj);

        // Clear the console to show the user's code results
        clearConsole();

        // Execute the user's code
        try {
            addToConsole("// Ejecutando pruebas");

            // Run user's code + test's code
            script.runInContext(vmContext);
            // Get the conext of the user's code + test's code, it allow get variables from this code
            // This is used to know how many test the user's code passed
            setSolvedTests(vmContext.solvedTest);

            addToConsole("// Pruebas completadas");

            // open modal
            openModal();

            // Scroll lesson to top
            scrollTopInformationLesson();

            // Find if the user resolve the problem before
            const findProblem = userProblems.filter(
                (cproblem) =>
                    cproblem.problem === problem && cproblem.course === course
            );

            // If problem is correct and it was save it in database skip save again
            if (findProblem.length === 0) {
                const email = localStorage.getItem("email");
                if (email) {
                    const courseProblem: Course = {
                        user_email: email,
                        course: course,
                        problem: problem,
                    };
                    // Open modal and save the problem in the database
                    enableLoadingModal();
                    await CoursesService.create(courseProblem);
                    disableLoadingModal();
                }
            }
        } catch (e) {
            setSolvedTests(vmContext.solvedTest);
            addToConsole(e);
        }

        setExecuted(true);
    };

    // Get Next Lesson
    useEffect(() => {
        // get next problem
        const nextProblemIndex = indexProblem + 1;
        const courseProblems = courses.filter(filterCurrentCourse(course))[0]
            .problems;
        if (nextProblemIndex < courseProblems.length) {
            const nextProblem = courseProblems[indexProblem + 1];
            setNextLesson(`/challenge/${course}/${nextProblem.problemUri}`);
        }

        scrollTopInformationLesson();

        // Reset state
        firstConsoleMessage();
        setSolvedTests([]);
        setCode("");
        setExecuted(false);
    }, [course, indexProblem]);

    // Add messages to console
    useEffect(() => {
        window.addEventListener("message", (e) => {
            if (e.data.log) {
                addToConsole(e.data.log);
            }
        });
    });

    // Load md file
    useEffect(() => {
        import(`../docs/${course}/${problem}.md`).then((res) => {
            fetch(res.default)
                .then((res) => res.text())
                .then((res) => setPost(res))
                .catch((res) => console.log("Error al cargar archivo md"));
        });
    }, [course, problem]);

    // Load all user problems
    useEffect(() => {
        const getUserProblems = async () => {
            const email = localStorage.getItem("email");
            if (email) {
                const currentUserProblems = await CoursesService.getByEmail(
                    email
                );
                setUserProblems(currentUserProblems);
            }
        };

        getUserProblems();
    }, []);

    if (currentProblem.length === 0) {
        return <div></div>;
    }

    return (
        <ProtectedRoute type="private">
            <Navbar />
            <NextProblemModal
                isOpen={isOpen}
                isLoadingModal={isLoadingModal}
                setIsOpen={setIsOpen}
                goToNextLesson={() => {
                    // reset state and redirect to next lesson/problem
                    firstConsoleMessage();
                    setCode("");
                    setSolvedTests([]);
                    setIsOpen(false);
                    setExecuted(false);
                    history.push(nextLesson);
                    scrollTopInformationLesson();
                }}
            />
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "40% 60%",
                    height: "calc(100vh - 56px)",
                    maxHeight: "100vh",
                    marginTop: 8,
                }}
            >
                <section
                    id="information"
                    ref={informationRef}
                    style={{
                        gridRow: 1,
                        overflowY: "scroll",
                        padding: 16,
                        paddingTop: 32,
                        background: "#1b1b32",
                        color: "#FFF",
                    }}
                >
                    <h1 style={{ textAlign: "center", fontSize: 24 }}>
                        {currentProblem[0].problemName}
                    </h1>

                    <LessonInformation post={post} />

                    <ListInstructions
                        executed={executed}
                        instructions={currentTest.instructions}
                        solvedTests={solvedTests}
                    />

                    {/* Buttons action */}
                    <ProblemActions
                        showResult={showResult}
                        setCode={setCode}
                        nextLesson={nextLesson}
                    />
                </section>
                <div style={{ display: "grid", gridTemplateRows: "72% 28%" }}>
                    <StyledCodeMirror code={code} setCode={setCode} />
                    <Console ref={consoleRef} />
                </div>
            </div>
        </ProtectedRoute>
    );
}

interface ParamsProblemPage {
    course: string;
    problem: string;
}

const filterCurrentCourse = (course: string) => (currentCourse: CourseData) => {
    return currentCourse.titleUri === course;
};
