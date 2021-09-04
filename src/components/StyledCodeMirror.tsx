// Codemirror utils
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material-darker.css";
import "codemirror/mode/javascript/javascript";
// Components
import { Controlled } from "react-codemirror2";
// Hooks
import { useState } from "react";

interface StyledCodeMirror {
  className?: string;
}

export default function CodeMirror({ className }: StyledCodeMirror) {
  const [code, setCode] = useState<string>("");

  return (
    <div className={className}>
      <Controlled
        value={code}
        className="codemirror"
        options={{
          mode: "javascript",
          theme: "material-darker",
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
