/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import DemoWithCode from "@material-docs/core/components/DemoWithCode";

function Component () {
    return (
        <div style={{padding: 30}}>
            I am a test component
            <br />
            <br />
            And I displayed in 2 DemoWithCode blocks.
        </div>
    );
}

const code = `
function Component () {
    return (
        <div style={{padding: 30}}>
            I am a test component
            <br />
            <br />
            And I displayed in 2 DemoWithCode blocks.
        </div>
    );
}
`.trim();

export default function DemoWithCodeExample() {
    return (
        <DemoWithCode
            name={"I am a DemoWithCode component"}
            theme={"darcula"}
            code={code}
            paperContainer
        >
            <Component />
        </DemoWithCode>
    );
}