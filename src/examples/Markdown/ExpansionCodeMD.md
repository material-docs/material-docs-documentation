import React from "react";
import Markdown from "@material-docs/core/components/Markdown";

const markdown = `
\`\`\`{"type": "expansion-code", "theme": "darcula", "name": "ExpansionCode in markdown"}
import React from "react";

function test() {
    console.log("I am function in expansion code element.");
    return null;
}
\`\`\`
`.trim();

export default function ExpansionCodeMD() {
    return (
        <Markdown>
            {markdown}
        </Markdown>
    );
}
