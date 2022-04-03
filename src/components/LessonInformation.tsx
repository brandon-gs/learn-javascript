import React from "react";
import Markdown from "react-markdown";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { anOldHope as dark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import rehypeRaw from "rehype-raw";

interface Props {
    post: string;
}

export default function LessonInformation({ post }: Props) {
    return (
        <Markdown
            rehypePlugins={[rehypeRaw]}
            components={{
                code({ node, inline, className, children, ...props }) {
                    return !inline ? (
                        <SyntaxHighlighter
                            children={String(children).replace(/\n$/, "")}
                            style={{ ...dark }}
                            className="code-fsize"
                            language="javascript"
                        />
                    ) : (
                        <code className={className} {...props}>
                            {children}
                        </code>
                    );
                },
            }}
        >
            {post}
        </Markdown>
    );
}
