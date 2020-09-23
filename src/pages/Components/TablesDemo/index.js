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

export default function TablesDemo() {
    return (
        <DocsPage
            name={"Tables"}
        >
            <H1>Tables</H1>
            <Markdown></Markdown>
            <H3>Simple Table</H3>
            <Markdown>Таблицы нужны для демонстрации большого количества структурированных данных.</Markdown>
            <DemoWithCode
                theme={"darcula"}
                code={simpleTableCode}
                paperContainer
                defaultExpanded
            >
                <Box p={1}>
                    <SimpleTable/>
                </Box>
            </DemoWithCode>
            <H3>Tables with markdown</H3>
            <Markdown>Для кастомизации таблиц вы можете использовать компонент __Markdown__. Не забудьте выставить пропы ```typographyInheritSize``` и ```inline``` в компоненте __Markdown__</Markdown>
            <DemoWithCode
                theme={"darcula"}
                code={tableWithMarkdownCode}
                paperContainer
            >
                <Box p={1}>
                    <TableWithMarkdown/>
                </Box>
            </DemoWithCode>
            <H2>Больше информации</H2>
            <Markdown>Вы можете узнать больше информации о настройке таблиц [тут]()</Markdown>
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