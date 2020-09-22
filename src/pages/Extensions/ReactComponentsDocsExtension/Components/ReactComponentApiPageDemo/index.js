/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import DocsPage from "@material-docs/core/components/DocsPage";
import {useLang} from "@material-docs/core";
import convertJsonToArray from "../../../../../utils/convertJsonToArray";
import H1 from "@material-docs/core/components/H1";
import H3 from "@material-docs/core/components/H3";
import Markdown from "@material-docs/core/components/Markdown";
import Code from "@material-docs/core/components/Code";

import overviewCode from "./overviewCode.md";
import exampleImage from "./images/example.png";
import Image from "@material-docs/core/components/Image";
import H2 from "@material-docs/core/components/H2";
import Link from "@material-docs/core/components/Link";
import ListItem from "@material-docs/core/components/ListItem";
import List from "@material-docs/core/components/List";

export default function ReactComponentApiPageDemo() {
    const {lang} = useLang();
    const locale = lang.locale.extensionDocs.ReactComponentsDocsExtension.pages.ReactComponentApiPageDemo;

    return (
        <DocsPage
            name={"ReactComponentApiPage"}
            searchDescription={locale.searchDescription}
            searchTags={convertJsonToArray(locale.searchTags)}
        >
            <H1>ReactComponentApiPage</H1>
            <H3 noTag noDivider>
                ReactComponentApiPage - React component designed to create documentation API pages for React components.
            </H3>
            <Markdown>
                This is a __preset__ for __React__ documenting component. You can extend it and add your own content.
            </Markdown>
            <H2>Installation</H2>
            <Markdown>Install via __yarn__:</Markdown>
            <Code theme={"darcula"}>
                $ yarn add @material-docs/react-components-docs-extension
            </Code>
            <Markdown>Install via __npm__:</Markdown>
            <Code theme={"darcula"}>
                $ npm install @material-docs/react-components-docs-extension
            </Code>
            <H2>Page layout</H2>
            <div style={{width: "80%", border: "2px solid #ccc", margin: "10%", marginTop: 0, marginBottom: 0}}>
                <Image src={exampleImage} alt={"RCDE Example image"} fullWidth/>
            </div>
            <H3 noTag noDivider>RCDE basic layout</H3>
            <Code theme={"darcula"}>
                {overviewCode}
            </Code>
            <H2>Demos</H2>
            <List>
                <ListItem><Link page={["Extensions", "React Components Docs Extension", "Component API", "RCDE Prop"]}>
                    Prop
                </Link></ListItem>
                <ListItem><Link page={["Extensions", "React Components Docs Extension", "Component API", "RCDE Style"]}>
                    Style
                </Link></ListItem>
                <ListItem><Link page={["Extensions", "React Components Docs Extension", "Component API", "RCDE ReactComponentApiPage"]}>
                    ReactComponentApiPage
                </Link></ListItem>
            </List>
        </DocsPage>
    );
}