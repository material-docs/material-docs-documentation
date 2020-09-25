/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import DocsPage from "@material-docs/core/components/DocsPage/DocsPage";
import React from "react";
import {H1, H2, H3} from "@material-docs/core/components";
import DemoWithCode from "@material-docs/core/components/DemoWithCode/DemoWithCode";
import MarkdownOverview from "../../../examples/Markdown/MarkdownOverview";
import {TaggingContext} from "@material-docs/core/hooks/useTags";
import Box from "@material-ui/core/Box";
import Markdown from "@material-docs/core/components/Markdown/Markdown";
import useLang from "@material-docs/core/hooks/useLang/useLang";
import Table from "@material-docs/core/components/Table/Table";
import {TableBody, TableCell, TableHead, TableRow} from "@material-docs/core";
import CodeSpan from "@material-docs/core/components/CodeSpan/CodeSpan";
import Block from "@material-docs/core/components/Block/Block";
import Bold from "@material-docs/core/components/Bold/Bold";
import ExpansionCodeMD from "../../../examples/Markdown/ExpansionCodeMD";
import DemoWithCodeMD from "../../../examples/Markdown/DemoWithCodeMD";
import CodeMD from "../../../examples/Markdown/CodeMD";
import List from "@material-docs/core/components/List/List";
import ListItem from "@material-docs/core/components/ListItem/ListItem";
import Link from "@material-docs/core/components/Link/Link";

import markdownOverviewCode from "../../../examples/Markdown/MarkdownOverview.md";
import expansionCodeBlockExample from "../../../examples/Markdown/ExpansionCodeMD.md"
import demoWithCodeBlockExample from "../../../examples/Markdown/DemoWithCodeMD.md";
import codeBlockExample from "../../../examples/Markdown/CodeMD.md"


const codeBlockExamples = {
    "expansion-code": {code: expansionCodeBlockExample, demo: <ExpansionCodeMD/>, page: "https://github.com/material-docs/material-docs-documentation/blob/master/src/examples/Markdown/ExpansionCodeMD.js"},
    "demo-with-code": {code: demoWithCodeBlockExample, demo: <DemoWithCodeMD/>, page: "https://github.com/material-docs/material-docs-documentation/blob/master/src/examples/Markdown/DemoWithCodeMD.js"},
    "code": {code: codeBlockExample, demo: <CodeMD/>, page: "https://github.com/material-docs/material-docs-documentation/blob/master/src/examples/Markdown/CodeMD.js"},
}

export default function MarkdownDemo() {
    const {lang} = useLang();
    const locale = lang.locale.pages.MarkdownDemo;

    return (
        <DocsPage
            name={"Markdown"}
            searchDescription={"Markdown - component, designed to convert text in markdown notation to Material Docs."}
            searchLabel={"Markdown"}
            searchTags={["markdown", "interpreter", "parser", "generator", "demo"]}
        >
            <H1>Markdown</H1>
            <H3 noTag noDivider>{locale.pageAbout}</H3>
            <Markdown>{locale.infoBlock1}</Markdown>
            <DemoWithCode
                code={markdownOverviewCode}
                themeLight={"darcula"}
                paperContainer
                defaultExpanded
                name={locale.overviewExample}
                actions={[{label: "GitHub source", link: "https://github.com/material-docs/material-docs-documentation/blob/master/src/examples/Markdown/MarkdownOverview.js"}]}
            >
                <Box p={2}>
                    <TaggingContext.Provider value={{
                        setTag: () => {
                        }, removeTag: () => {
                        }, tags: {}
                    }}>
                        <MarkdownOverview/>
                    </TaggingContext.Provider>
                </Box>
            </DemoWithCode>
            <H2>{locale.moreInfo}</H2>
            <Markdown>{locale.moreInfoDetails}</Markdown>
            <H2>{locale.deepIntegration}</H2>
            <Markdown>{locale.infoBlock2}</Markdown>
            {locale.codeComponents.map(item => {
                const demo = codeBlockExamples[item.key];
                return (
                    <React.Fragment key={item.key}>
                        <H3 noTag={false}>{item.name}</H3>
                        {item.description && <Markdown>{item.description}</Markdown>}
                        {demo &&
                        <DemoWithCode
                            code={demo.code}
                            themeLight={"darcula"}
                            paperContainer
                            actions={[{label: "GitHub source", link: demo.page}]}
                        >
                            <Box p={2}>
                                <TaggingContext.Provider value={{
                                    setTag: () => {
                                    }, removeTag: () => {
                                    }, tags: {}
                                }}>
                                    {demo.demo}
                                </TaggingContext.Provider>
                            </Box>
                        </DemoWithCode>
                        }
                        <Block><Bold>Key</Bold> - <CodeSpan>{item.key}</CodeSpan></Block>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Description</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {item.params.map(param => (
                                    <TableRow key={param.name}>
                                        <TableCell><CodeSpan>{param.name}</CodeSpan></TableCell>
                                        <TableCell>{param.description}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </React.Fragment>
                )
            })}
            <H3>APIs</H3>
            <List>
                <ListItem><Link page={["Component APIs", "Markdown"]}>Markdown</Link></ListItem>
            </List>
        </DocsPage>
    );
}