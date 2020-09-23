/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import DocsPage from "@material-docs/core/components/DocsPage/DocsPage";
import React from "react";
import {H1, H2, H3} from "@material-docs/core/components";
import Markdown from "@material-docs/core/components/Markdown/Markdown";
import DemoWithCode from "@material-docs/core/components/DemoWithCode/DemoWithCode";
import {TaggingContext} from "@material-docs/core/hooks/useTags";
import AllHeaders from "../../../examples/Headers/AllHeaders";
import AllHeadersCode from "../../../examples/Headers/AllHeaders.md";
import Code from "@material-docs/core/components/Code/Code";
import Box from "@material-ui/core/Box";
import useLang from "@material-docs/core/hooks/useLang/useLang";
import List from "@material-docs/core/components/List/List";
import ListItem from "@material-docs/core/components/ListItem/ListItem";
import Link from "@material-docs/core/components/Link/Link";

export default function HeadersDemo() {
    const {lang} = useLang();
    const locale = lang.locale.pages.HeadersDemo;
    return (
        <DocsPage
            name={"Headers"}
            searchDescription={"Headers"}
            searchLabel={"Headers demonstration page."}
            keys={["h1", "h2", "h3", "h4", "h5", "h6", "typography", "header", "caption", "big", "text"]}
        >
            <H1>Headers</H1>
            <H3 noTag noDivider>{locale.pageAbout}</H3>
            <H2>Overview</H2>
            <Markdown> {locale.infoBlock1} </Markdown>
            <DemoWithCode
                paperContainer
                code={AllHeadersCode}
                theme={"darcula"}
                defaultExpanded
                name={locale.headersExample}
            >
                <Box p={2}>
                    <TaggingContext.Provider value={{
                        setTag: () => {
                        }, removeTag: () => {
                        }, tags: {}
                    }}>
                        <AllHeaders/>
                    </TaggingContext.Provider>
                </Box>
            </DemoWithCode>
            <H2>Settings</H2>
            <H3 noDivider>{locale.contentAutoGeneration}</H3>
            <Markdown> {locale.tagsInfo} </Markdown>
            <Code theme={"darcula"}>
                {`return(\n    <H1 noTag>I am H1 header than not generates navigation tags!</H1>\n)`}
            </Code>
            <Markdown>{locale.noTagInfo}</Markdown>
            <H3 noDivider>{locale.divider}</H3>
            <Markdown>{locale.dividerInfo}</Markdown>
            <Code theme={"darcula"}>
                {`return(\n    <H1 noDivider>I am H1 without divider at the bottom!</H1>\n)`}
            </Code>
            <Markdown>{locale.noDividerInfo}</Markdown>
            <H3 noDivider>{locale.customAnchors}</H3>
            <Markdown> {locale.anchorInfo} </Markdown>
            <Code theme={"darcula"}>
                {`return(\n    <H1 id="i-am-the-best-one">I am H1 with custom anchor!</H1>\n)`}
            </Code>
            <H3>APIs</H3>
            <List>
                <ListItem><Link page={["Component APIs", "Header"]}>Header</Link></ListItem>
                <ListItem><Link page={["Component APIs", "H1"]}>H1</Link></ListItem>
                <ListItem><Link page={["Component APIs", "H2"]}>H2</Link></ListItem>
                <ListItem><Link page={["Component APIs", "H3"]}>H3</Link></ListItem>
                <ListItem><Link page={["Component APIs", "H4"]}>H4</Link></ListItem>
                <ListItem><Link page={["Component APIs", "H5"]}>H5</Link></ListItem>
                <ListItem><Link page={["Component APIs", "H6"]}>H6</Link></ListItem>
            </List>
        </DocsPage>
    );
}