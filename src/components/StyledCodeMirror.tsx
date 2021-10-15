// Codemirror utils
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material-darker.css";
import "codemirror/mode/javascript/javascript";
// Components
import { Controlled } from "react-codemirror2";
// Styles
import "../styles/Codemirror.css";

interface StyledCodeMirror {
    code: string;
    setCode: (newValue: string) => void;
    className?: string;
}

export default function CodeMirror({
    code,
    setCode,
    className = "",
}: StyledCodeMirror) {
    return (
        <div className={`codemirror ${className}`}>
            <Controlled
                value={code}
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
    );
}
