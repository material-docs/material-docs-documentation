import React from "react";
import Markdown from "@material-docs/core/components/Markdown";

const markdown = `
\`\`\`{"type": "code", "theme": "darcula"}
import React from "react";

function test() {
    console.log("I am function in code element.");
    return null;
}
\`\`\`
`.trim();

export default function CodeMD() {
    return (
        <Markdown>
            {markdown}
        </Markdown>
    );
}
