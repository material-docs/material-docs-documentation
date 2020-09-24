/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {useLang} from "@material-docs/core/hooks";
import DocsPage from "@material-docs/core/components/DocsPage/DocsPage";
import {H1, H2, H3} from "@material-docs/core/components";
import DemoWithCode from "@material-docs/core/components/DemoWithCode/DemoWithCode";
import Box from "@material-ui/core/Box";
import TextStylingOverview from "../../../examples/TextStyling/TextStylingOverview";
import Markdown from "@material-docs/core/components/Markdown/Markdown";
import TextStylingNested from "../../../examples/TextStyling/TextStylingNested";
import List from "@material-docs/core/components/List/List";
import ListItem from "@material-docs/core/components/ListItem/ListItem";
import Link from "@material-docs/core/components/Link/Link";

import overviewCode from "../../../examples/TextStyling/TextStylingOverview.md";
import nestedCode from "../../../examples/TextStyling/TextStylingNested.md";

export default function TextStylingDemo() {
    const {lang} = useLang();
    const locale = lang.locale.pages.TextDecoratorsDemo;
    return (
        <DocsPage
            name={"Text decorators"}
            searchLabel={"Text decorators"}
            searchDescription={"Text styling demonstration page."}
            keys={["text", "styling", "decoration", "wrappers", "demo"]}
        >
            <H1>Text decorators</H1>
            <H3 noTag noDivider>{locale.pageAbout}</H3>
            <Markdown>{locale.infoBlock1}</Markdown>
            <DemoWithCode
                paperContainer
                code={overviewCode}
                defaultExpanded
                theme={"darcula"}
                name={locale.overview}
                actions={[{label: "GitHub source", link: "https://github.com/material-docs/material-docs-documentation/blob/master/src/examples/TextStyling/TextStylingOverview.js"}]}
            >
                <Box p={2}>
                    <TextStylingOverview/>
                </Box>
            </DemoWithCode>
            <H2>{locale.nesting}</H2>
            <Markdown>{locale.nestingInfo}</Markdown>
            <DemoWithCode
                paperContainer
                code={nestedCode}
                theme={"darcula"}
                name={locale.nestedComponents}
                actions={[{label: "GitHub source", link: "https://github.com/material-docs/material-docs-documentation/blob/master/src/examples/TextStyling/TextStylingNested.js"}]}
            >
                <Box p={2}>
                    <TextStylingNested/>
                </Box>
            </DemoWithCode>
            <H3>APIs</H3>
            <List>
                <ListItem><Link page={["Component APIs", "Bold"]}>Bold</Link></ListItem>
                <ListItem><Link page={["Component APIs", "Block"]}>Block</Link></ListItem>
                <ListItem><Link page={["Component APIs", "Italic"]}>Italic</Link></ListItem>
                <ListItem><Link page={["Component APIs", "CodeSpan"]}>CodeSpan</Link></ListItem>
            </List>
        </DocsPage>
    );
}