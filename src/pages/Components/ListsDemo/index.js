/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import DocsPage from "@material-docs/core/components/DocsPage/DocsPage";
import {H1, H2, H3} from "@material-docs/core/components";
import DemoWithCode from "@material-docs/core/components/DemoWithCode/DemoWithCode";
import SimpleList from "../../../examples/Lists/SimpleList";
import Box from "@material-ui/core/Box";
import ListWithNestedItems from "../../../examples/Lists/ListWithNestedItems";
import DecoratedList from "../../../examples/Lists/DecoratedList";
import List from "@material-docs/core/components/List/List";
import ListItem from "@material-docs/core/components/ListItem/ListItem";
import Markdown from "@material-docs/core/components/Markdown/Markdown";
import Link from "@material-docs/core/components/Link/Link";

import simpleListCode from "../../../examples/Lists/SimpleList.md";
import listWithNestedItemsCode from "../../../examples/Lists/ListWithNestedItems.md";
import decoratedListCode from "../../../examples/Lists/DecoratedList.md";


export default function ListsDemo() {
    return (
        <DocsPage
            name={"Lists"}
            searchDescription={"Demonstration page of lists functional."}
            searchLabel={"Lists"}
            searchTags={["lists", "demo", "tutorial"]}
        >
            <H1>Lists</H1>
            <H3 noTag noDivider>Lists can be used to show structured information with list items.</H3>
            <Markdown>
                For example, you want to show people your TO DO list or list of programs you use. Each ```ListItem```
                can contain
                its content and nested list items inside ```ListItemContained``` component.
            </Markdown>
            <DemoWithCode
                code={simpleListCode}
                paperContainer
                theme={"darcula"}
                name={"Simple list"}
                defaultExpanded
                actions={[{
                    label: "GitHub source",
                    link: "https://github.com/material-docs/material-docs-documentation/blob/master/src/examples/Lists/SimpleList.js"
                }]}
            >
                <Box p={2}>
                    <SimpleList/>
                </Box>
            </DemoWithCode>

            <Markdown>
                You can create __nested lists__ inside ```ListItem``` component. Just place __nested items__ inside
                ```ListItemContained``` component in ```ListItem```.
            </Markdown>
            <DemoWithCode
                code={listWithNestedItemsCode}
                paperContainer theme={"darcula"}
                name={"List with nested items"}
                actions={[{
                    label: "GitHub source",
                    link: "https://github.com/material-docs/material-docs-documentation/blob/master/src/examples/Lists/ListWithNestedItems.js"
                }]}
            >
                <Box p={2}>
                    <ListWithNestedItems/>
                </Box>
            </DemoWithCode>

            <Markdown>Lists can be __decorated__ with several points type.</Markdown>
            <DemoWithCode
                code={decoratedListCode}
                paperContainer theme={"darcula"}
                name={"List with items decoration"}
                actions={[{
                    label: "GitHub source",
                    link: "https://github.com/material-docs/material-docs-documentation/blob/master/src/examples/Lists/DecoratedList.js"
                }]}
            >
                <Box p={2}>
                    <DecoratedList/>
                </Box>
            </DemoWithCode>

            <H3>APIs</H3>
            <List>
                <ListItem><Link page={["Component APIs", "List"]}>List</Link></ListItem>
                <ListItem><Link page={["Component APIs", "ListItem"]}>ListItem</Link></ListItem>
                <ListItem><Link page={["Component APIs", "ListItemContained"]}>ListItemContained</Link></ListItem>
            </List>

        </DocsPage>
    );
}