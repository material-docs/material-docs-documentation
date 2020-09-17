/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import Bold from "@material-docs/core/components/Bold";
import Italic from "@material-docs/core/components/Italic";
import Block from "@material-docs/core/components/Block";
import CodeSpan from "@material-docs/core/components/CodeSpan";

export default function TextStylingNested() {
    return (
        <React.Fragment>
            I <Bold> am an <Italic>italic text inside</Italic> bold component.</Bold><br/><br/>
            <Block>I am a <CodeSpan>Block</CodeSpan> with <Italic><Bold>an italic bold
                text</Bold> inside!</Italic></Block>
        </React.Fragment>
    );
}