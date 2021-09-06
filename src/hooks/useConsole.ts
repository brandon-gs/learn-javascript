import { useRef } from "react";

export default function useConsole() {
  const consoleRef = useRef<HTMLDivElement>(null);

  const add = (content: any) => {
    const element = consoleRef.current;

    // Don't execute if hasnt a valid ref
    if (!element) return;

    const node = document.createElement("div");

    let text = String(content);
    let parsed;

    try {
      parsed = String(JSON.parse(text));
    } catch (e) {
      parsed = text;
    }

    node.innerHTML =
      "<p>" + htmlEncode(parsed).replace("/\\n/", "<br/>") + "</p>";

    element.appendChild(node);
    element.scrollTop = element.scrollHeight;
  };

  const clear = () => {
    const element = consoleRef.current;

    // Don't execute if hasnt a valid ref
    if (!element) return;

    while (element.firstChild) {
      consoleRef.current?.removeChild(element.firstChild);
    }
  };

  return { consoleRef, addToConsole: add, clearConsole: clear };
}

function htmlEncode(str: any) {
  if (typeof str !== "string") return str;
  return str.replace(/[&<>"']/g, function ($0) {
    return (
      "&" +
      { "&": "amp", "<": "lt", ">": "gt", '"': "quot", "'": "#39" }[$0] +
      ";"
    );
  });
}
