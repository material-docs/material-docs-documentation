/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import DocsPage from "@material-docs/core/components/DocsPage/DocsPage";
import {H1, H3} from "@material-docs/core/components";
import Markdown from "@material-docs/core/components/Markdown/Markdown";
import Code from "@material-docs/core/components/Code/Code";
import List from "@material-docs/core/components/List/List";
import ListItem from "@material-docs/core/components/ListItem/ListItem";
import Link from "@material-docs/core/components/Link";

import simpleLayoutCode from "./SimpleLayoutCode.md";
import layoutWithAutoMenuCode from "./LayoutWithAutoMenu.md";

export default function LayoutDemo() {
    return (
        <DocsPage
            name={"Layout"}
            searchDescription={"Demonstration page of layout functional."}
            searchLabel={"Layout"}
            searchTags={["docs", "layout", "tutorial", "page", "menu", "search", "locale", "lang"]}
        >
            <H1>Layout</H1>
            <H3 noTag noDivider>Layout - is a core of MaterialDocs.</H3>
            <Markdown>
                ```DocsLayout``` component contains _locale_ information, _search_ context and lot of technical data.
                __Material Docs__ starts here.
            </Markdown>
            <H3 noDivider>Simple layout</H3>
            <Code themeLight={"darcula"}>
                {simpleLayoutCode}
            </Code>
            <Markdown>
                This code shows how to create simple layout. __Page names__ will be automatically converted to
                __routes__, so give normal name for pages.
                ```DocsMenuItem``` prop ___name___ is a page identifier.
            </Markdown>
            <H3 noDivider>Layout with auto menu</H3>
            <Code themeLight={"darcula"}>{layoutWithAutoMenuCode}</Code>
            <Markdown>
                Here is ```DocsLayout``` with automated menu. You can add __pages__ and __groups__ in other __groups__
                to create
                hierarchical menu structure.
            </Markdown>
            <H3 noDivider>More info</H3>
            <Markdown>
                You can learn more about creating material docs in [this guide]().
            </Markdown>
            <H3>APIs</H3>
            <List>
                <ListItem><Link page={["Component APIs", "DocsLayout"]}>DocsLayout</Link></ListItem>
                <ListItem><Link page={["Component APIs", "DocsPage"]}>DocsPage</Link></ListItem>
                <ListItem><Link page={["Component APIs", "DocsPages"]}>DocsPages</Link></ListItem>
                <ListItem><Link page={["Component APIs", "DocsMenu"]}>DocsMenu</Link></ListItem>
                <ListItem><Link page={["Component APIs", "DocsMenuItem"]}>DocsMenuItem</Link></ListItem>
                <ListItem><Link page={["Component APIs", "AutoDocsMenu"]}>AutoDocsMenu</Link></ListItem>
            </List>
        </DocsPage>
    );
}