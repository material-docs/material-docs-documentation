/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import Bold from "@material-docs/core/components/Bold";
import Italic from "@material-docs/core/components/Italic";
import Block from "@material-docs/core/components/Block";
import CodeSpan from "@material-docs/core/components/CodeSpan";

export default function TextStylingOverview() {
    return (
        <React.Fragment>
            This is a <Bold>bold text</Bold> near <Italic>italic text</Italic> inside my line. <br/>
            And me is <Italic><Bold>bold italic text</Bold></Italic>
            <Block>I am text in <CodeSpan>{"<Block/>"}</CodeSpan> component. </Block>
            Lets see on prev code line via inline code block
            <CodeSpan>{"<Block>I am text in <CodeSpan>{\"<Block/>\"}</CodeSpan> component. </Block>"}</CodeSpan>
        </React.Fragment>
    );
}