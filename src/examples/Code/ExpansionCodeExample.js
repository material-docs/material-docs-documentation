/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */


import React from "react";
import ExpansionCode from "@material-docs/core/components/ExpansionCode";

const code = `
function test() {
    console.log("Hello world?");
    console.log("Yes, hello!");
    
    console.log("I am Material Docs framework :)");
    
    for (let i = 0; i < 20; i++) {
        console.log("Huuuuraaaa! \n");
    }
    
    return null;
}
`.trim();

export default function ExpansionCodeExample() {
    return (
        <ExpansionCode
            name={"My name is ExpansionCode"}
            noTag
            theme={"darcula"}
            language={"javascript"}
        >
            {code}
        </ExpansionCode>
    );
}
