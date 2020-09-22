/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import Code from "@material-docs/core/components/Code";

const code = `
    function test() {
        console.log("Hello world!");
        console.log("I am a Code element.");
    }
`.trim();

export default function CodeExample() {
    return (
        <Code theme={"darcula"} language={"javascript"}>
            {code}
        </Code>
    );
}
