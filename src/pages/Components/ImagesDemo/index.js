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
import ImagesOverview from "../../../examples/Images/ImagesOverview";
import List from "@material-docs/core/components/List/List";
import ListItem from "@material-docs/core/components/ListItem/ListItem";
import Link from "@material-docs/core/components/Link/Link";

const overviewCode = `
import React from "react";
import Image from "@material-docs/core/components/Image/Image";
import image from "images/GithubBannerWide.png"

export default function ImagesOverview() {
    return (
        <Image src={image} alt={"overview image"} fullWidth/>
    );
}
`.trim();

export default function ImagesDemo() {
    const {lang} = useLang();
    const locale = lang.locale.pages.ImagesDemo;
    return (
        <DocsPage
            name={"Images"}
            searchLabel={"Text decorators"}
            searchDescription={"Text styling demonstration page."}
            keys={["text", "styling", "decoration", "wrappers", "demo"]}
        >
            <H1>Images</H1>
            <H3 noTag noDivider>{locale.pageAbout}</H3>
            <Markdown>{locale.infoBlock}</Markdown>
            <DemoWithCode
                code={overviewCode}
                theme={"darcula"}
                paperContainer
            >
                <ImagesOverview/>
            </DemoWithCode>
            <H3>APIs</H3>
            <List>
                <ListItem><Link page={["Component APIs", "Image"]}>Image</Link></ListItem>
            </List>
        </DocsPage>
    );
}