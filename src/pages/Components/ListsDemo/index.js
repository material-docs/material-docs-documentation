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

const SimpleListCode = `
import React from "react";
import List from "@material-docs/core/components/List";
import ListItem from "@material-docs/core/components/ListItem";
import {H4} from "@material-docs/core/components";

export default function SimpleList() {
    return (
        <React.Fragment>
            <H4 noTag>Buy</H4>
            <List>
                <ListItem>Carrot x3</ListItem>
                <ListItem>Potato 3kg</ListItem>
                <ListItem>Apples 1kg</ListItem>
                <ListItem>Strawberry 1kg</ListItem>
            </List>
        </React.Fragment>
    );
}
`.trim();

const ListWithNestedItemsCode = `
import React from "react";
import List from "@material-docs/core/components/List";
import ListItem from "@material-docs/core/components/ListItem";
import ListItemContained from "@material-docs/core/components/ListItemContained/ListItemContained";

export default function ListWithNestedItems() {
    return (
        <React.Fragment>
            <List>
                <ListItem>
                    Web
                    <ListItemContained>
                        <ListItem>Front-end</ListItem>
                        <ListItem>Back-end</ListItem>
                    </ListItemContained>
                </ListItem>
                <ListItem>
                    <ListItemContained>
                        <ListItem>Engine programmer</ListItem>
                        <ListItem>Level designer</ListItem>
                        <ListItem>Character artist</ListItem>
                    </ListItemContained>
                    Gamedev
                </ListItem>
                <ListItem>Data science</ListItem>
            </List>
        </React.Fragment>
    );
}
`.trim();

const DecoratedListCode = `
import React from "react";
import List from "@material-docs/core/components/List";
import ListItem from "@material-docs/core/components/ListItem";

export default function DecoratedList() {
    return (
        <React.Fragment>
            <List>
                <ListItem type={"circle"}>I am list item with circle styling</ListItem>
                <ListItem type={"square"}>I am list item with square styling</ListItem>
                <ListItem type={"upper-roman"}>I am list item with upper-roman styling</ListItem>
                <ListItem type={"lower-alpha"}>I am list item with lower-alpha styling</ListItem>
                <ListItem type={"none"}>I am list item without styling</ListItem>
            </List>
        </React.Fragment>
    );
}
`.trim();

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
            <DemoWithCode code={SimpleListCode} paperContainer theme={"darcula"} name={"Simple list"} defaultExpanded>
                <Box p={2}>
                    <SimpleList/>
                </Box>
            </DemoWithCode>

            <Markdown>
                You can create __nested lists__ inside ```ListItem``` component. Just place __nested items__ inside
                ```ListItemContained``` component in ```ListItem```.
            </Markdown>
            <DemoWithCode code={ListWithNestedItemsCode} paperContainer theme={"darcula"}
                          name={"List with nested items"}>
                <Box p={2}>
                    <ListWithNestedItems/>
                </Box>
            </DemoWithCode>

            <Markdown>Lists can be __decorated__ with several points type.</Markdown>
            <DemoWithCode code={DecoratedListCode} paperContainer theme={"darcula"} name={"List with items decoration"}>
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