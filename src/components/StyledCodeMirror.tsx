// Codemirror utils
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material-darker.css";
import "codemirror/theme/darcula.css";
import "codemirror/mode/javascript/javascript";
// Components
import { Controlled } from "react-codemirror2";
// Styles
import "../styles/Codemirror.css";
import { useEffect, useState } from "react";

interface StyledCodeMirror {
    defaultCode: string;
    code: string;
    setCode: (newValue: string) => void;
    className?: string;
}

export default function CodeMirror({
    defaultCode = "",
    code,
    setCode,
    className = "",
}: StyledCodeMirror) {
    const [currentCode, setCurrentCode] = useState<string>(defaultCode + code);

    useEffect(() => {
        setCurrentCode(code);
    }, [code]);

    return (
        <section
            id="editor"
            style={{
                height: "100%",
                borderLeft: "solid 1px black",
            }}
        >
            <div className={`codemirror ${className}`}>
                <Controlled
                    value={currentCode}
                    className="codemirror"
                    options={{
                        mode: "javascript",
                        theme: "material-darker",
                        addModeClass: true,
                        lineNumbers: true,
                        autofocus: true,
                        foldGutter: false,
                        gutters: [],
                        styleSelectedText: true,
                        matchBrackets: true,
                        autoCloseBrackets: true,
                        lineWrapping: true,
                        highlightSelectionMatches: {
                            showToken: /\w/,
                            annotateScrollbar: true,
                        },
                    }}
                    onBeforeChange={(editor, data, value) => {
                        setCode(value);
                    }}
                />
            </div>
        </section>
    );
}
