/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {useLang} from "@material-docs/core/hooks";
import DocsPage from "@material-docs/core/components/DocsPage/DocsPage";
import {H1, H3} from "@material-docs/core/components";
import DemoWithCode from "@material-docs/core/components/DemoWithCode/DemoWithCode";
import Markdown from "@material-docs/core/components/Markdown/Markdown";
import List from "@material-docs/core/components/List/List";
import ListItem from "@material-docs/core/components/ListItem/ListItem";
import Link from "@material-docs/core/components/Link/Link";

import codeCode from "../../../examples/Code/codeExample.md";
import convertJsonToArray from "../../../utils/convertJsonToArray";
import CodeExample from "../../../examples/Code/CodeExample";
import Box from "@material-ui/core/Box";

import expansionCodeCode from "../../../examples/Code/expansionCodeExample.md";
import ExpansionCodeExample from "../../../examples/Code/ExpansionCodeExample";

import {TaggingContext} from "@material-docs/core/hooks/useTags"

import demoWithCodeCode from "../../../examples/Code/demoWithCodeExampleCode.md";
import DemoWithCodeExample from "../../../examples/Code/DemoWithCodeExpample";
import H2 from "@material-docs/core/components/H2";
import Locale from "@material-docs/core/components/Locale";

export default function CodeDemo() {
    const {lang} = useLang();
    const localeObj = lang.locale.pages.CodeDemo;

    const locale = "pages/CodeDemo";

    return (
        <DocsPage
            name={"Code showers"}
            searchDescription={localeObj.searchDescription}
            searchTags={convertJsonToArray(localeObj.searchTags)}
        >
            <H1>Code showers</H1>
            <H3 noTag noDivider>Code showers - React components, designed to help you to share your source code.</H3>
            <Markdown locale={`${locale}/globalDetails`} />
            <H2><Locale path={`${locale}/componentsHeader`}/></H2>
            <H3 noDivider>{"<Code/>"}</H3>
            <Markdown locale={`${locale}/codeDetails`}></Markdown>
            <DemoWithCode
                code={codeCode}
                themeLight={"darcula"}
                paperContainer
                actions={[{label: "Source code", link: ""}]}
                actions={[{
                    label: "GitHub source",
                    link: "https://github.com/material-docs/material-docs-documentation/blob/master/src/examples/Code/CodeExample.js"
                }]}
                p={1}
            >
                <CodeExample/>
            </DemoWithCode>
            <H3 noDivider>{"<ExpansionCode/>"}</H3>
            <Markdown locale={`${locale}/expansionCodeDetails`}/>
            <DemoWithCode
                code={expansionCodeCode}
                themeLight={"darcula"}
                paperContainer
                actions={[{label: "Source code", link: ""}]}
                actions={[{
                    label: "GitHub source",
                    link: "https://github.com/material-docs/material-docs-documentation/blob/master/src/examples/Code/ExpansionCodeExample.js"
                }]}
                p={1}
            >
                <ExpansionCodeExample/>
            </DemoWithCode>
            <H3 noDivider>{"<DemoWithCode/>"}</H3>
            <Markdown locale={`${locale}/demoWithCodeDetails`}/>
            <DemoWithCode
                code={demoWithCodeCode}
                themeLight={"darcula"}
                paperContainer
                actions={[{
                    label: "GitHub source",
                    link: "https://github.com/material-docs/material-docs-documentation/blob/master/src/examples/Code/DemoWithCodeExpample.js"
                }]}
                p={1}
            >
                <DemoWithCodeExample/>
            </DemoWithCode>
            <H3>APIs</H3>
            <List>
                <ListItem><Link page={["Component APIs", "Code"]}>Code</Link></ListItem>
                <ListItem><Link page={["Component APIs", "DemoWithCode"]}>DemoWithCode</Link></ListItem>
                <ListItem><Link page={["Component APIs", "ExpansionCode"]}>ExpansionCode</Link></ListItem>
            </List>
        </DocsPage>
    );
}
