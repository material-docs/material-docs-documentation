/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import DocsPage from "@material-docs/core/components/DocsPage";
import H1 from "@material-docs/core/components/H1";
import Markdown from "@material-docs/core/components/Markdown";
import H3 from "@material-docs/core/components/H3";
import DemoWithCode from "@material-docs/core/components/DemoWithCode";
import SimpleTable from "../../../examples/Tables/SimpleTable";
import simpleTableCode from "../../../examples/Tables/simpleTable.md";
import Box from "@material-ui/core/Box";
import TableWithMarkdown from "../../../examples/Tables/TableWithMarkdown";
import tableWithMarkdownCode from "../../../examples/Tables/tableWithMarkdown.md";
import H2 from "@material-docs/core/components/H2";
import List from "@material-docs/core/components/List";
import ListItem from "@material-docs/core/components/ListItem";
import Link from "@material-docs/core/components/Link";
import {useLang} from "@material-docs/core";

export default function TablesDemo() {
    const {lang} = useLang();
    const locale = lang.locale.pages.TablesDemo;

    return (
        <DocsPage
            name={"Tables"}
            searchDescription={"Tables demo page."}
        >
            <H1>Tables</H1>
            <H3>{locale.simpleTableHeader}</H3>
            <Markdown>{locale.simpleTableSummary}</Markdown>
            <DemoWithCode
                theme={"darcula"}
                code={simpleTableCode}
                paperContainer
                defaultExpanded
                actions={[{label: "GitHub source", link: "https://github.com/material-docs/material-docs-documentation/blob/master/src/examples/Tables/SimpleTable.js"}]}
            >
                <Box p={1}>
                    <SimpleTable/>
                </Box>
            </DemoWithCode>
            <H3>{locale.tablesWithMarkdownHeader}</H3>
            <Markdown>{locale.tablesWithMarkdownSummary}</Markdown>
            <DemoWithCode
                theme={"darcula"}
                code={tableWithMarkdownCode}
                paperContainer
                actions={[{label: "GitHub source", link: "https://github.com/material-docs/material-docs-documentation/blob/master/src/examples/Tables/TableWithMarkdown.js"}]}
            >
                <Box p={1}>
                    <TableWithMarkdown/>
                </Box>
            </DemoWithCode>
            <H2>{locale.moreInfoHeader}</H2>
            <Markdown>{locale.moreInfoSummary}</Markdown>
            <H2>Demos</H2>
            <List>
                <ListItem><Link page={["Component APIs", "Table"]}>Table</Link></ListItem>
                <ListItem><Link page={["Component APIs", "TableHead"]}>TableHead</Link></ListItem>
                <ListItem><Link page={["Component APIs", "TableBody"]}>TableBody</Link></ListItem>
                <ListItem><Link page={["Component APIs", "TableCell"]}>TableCell</Link></ListItem>
                <ListItem><Link page={["Component APIs", "TableRow"]}>TableRow</Link></ListItem>
                <ListItem><Link page={["Component APIs", "Markdown"]}>Markdown</Link></ListItem>
            </List>
        </DocsPage>
    );
}