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

import demoWithCodeCode from "../../../examples/Code/expansionCodeExample.md";
import DemoWithCodeExample from "../../../examples/Code/DemoWithCodeExpample";

export default function CodeDemo() {
    const {lang} = useLang();
    const locale = lang.locale.pages.CodeDemo;

    return (
        <DocsPage
            name={"Code showers"}
            searchDescription={locale.searchDescription}
            searchTags={convertJsonToArray(locale.searchTags)}
        >
            <H1>Code showers</H1>
            <H3 noTag noDivider>Code showers - React components, designed to help you to share your source code.</H3>
            <Markdown>asd</Markdown>
            <DemoWithCode
                name={"<Code/>"}
                code={codeCode}
                theme={"darcula"}
                paperContainer
                actions={[{label: "Source code", link: ""}]}
            >
                <Box p={1}>
                    <CodeExample />
                </Box>
            </DemoWithCode>
            <DemoWithCode
                name={"<ExpansionCode/>"}
                code={expansionCodeCode}
                theme={"darcula"}
                paperContainer
                actions={[{label: "Source code", link: ""}]}
            >
                <Box p={1}>
                    <TaggingContext.Provider value={{setTag: () => {}, removeTag: () => {}}}>
                        <ExpansionCodeExample />
                    </TaggingContext.Provider>
                </Box>
            </DemoWithCode>
            <DemoWithCode
                name={"<DemoWithCode/>"}
                code={demoWithCodeCode}
                theme={"darcula"}
                actions={[{label: "Source code", link: ""}]}
                paperContainer
                actions={[{label: "Source code", link: ""}]}
            >
                <Box p={1}>
                    <TaggingContext.Provider value={{setTag: () => {}, removeTag: () => {}}}>
                        <DemoWithCodeExample />
                    </TaggingContext.Provider>
                </Box>
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
