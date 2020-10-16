/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import DocsPage from "@material-docs/core/components/DocsPage/DocsPage";
import {H1, H2, H3, H4} from "@material-docs/core/components";
import List from "@material-docs/core/components/List/List";
import ListItem from "@material-docs/core/components/ListItem/ListItem";
import Markdown from "@material-docs/core/components/Markdown/Markdown";
import Code from "@material-docs/core/components/Code/Code";
import Bold from "@material-docs/core/components/Bold/Bold";
import Link from "@material-docs/core/components/Link";

const installCode = `
// with npm
npm install @material-docs/core

// with yarn
yarn add @material-docs/core
`.trim();

const MUIInstallationCode = `
// with npm
npm install @material-ui/core

// with yarn
yarn add @material-ui/core
`.trim();

const MUIIconsInstallationCode = `
// with npm
npm install @material-ui/icons

// with yarn
yarn add @material-ui/icons
`.trim();

export default function Installation() {
    return (
        <DocsPage
            name={"Installation"}
            searchDescription={"Installation page for MaterialDocs."}
            searchLabel={"Installation"}
            searchTags={["installation", "getting", "started"]}
            order={2}
        >
            <H1>Installation</H1>
            <H3 noTag noDivider>Install MaterialDocs - framework for creating documentation.</H3>
            <Markdown>MaterialDocs is available as an [nmp package]()</Markdown>
            <H2>npm</H2>
            <Markdown>To install and save in your ```package.json``` dependencies, run:</Markdown>
            <Code themeLight={"darcula"}>{installCode}</Code>
            <H2>Material-UI</H2>
            <Markdown>Note, that __MaterialDocs__ based on [__Material-UI__]() framework. If you want to deeply
                customize UI, install:</Markdown>
            <Code themeLight={"darcula"}>{MUIInstallationCode}</Code>
            <H3>Material-UI Icons</H3>
            <Markdown>You can access [__Material-UI__]() svg icons by adding to your ```package.json``` next
                ___package___:</Markdown>
            <Code themeLight={"darcula"}>{MUIIconsInstallationCode}</Code>
            <H2>Info</H2>
            <Markdown>You can start using MaterialDocs with minimal front-end infrastructure. Package providing a lot of
                components to create great documentation site.</Markdown>
            <H4>Some steps to get started</H4>
            <List>
                <ListItem>Read <Bold>Components</Bold> tab and get access to demonstration source code.</ListItem>
                <ListItem>Read <Bold>Component APIs</Bold> tab and get to know how to manipulate with
                    components.</ListItem>
                <ListItem>Read <Bold>Tutorials</Bold> tab to get instructions on different topics.</ListItem>
                <ListItem>Check <Link href={"https://github.com/material-docs/material-docs"}>
                    <Bold>source code on GitHub</Bold>
                </Link> for best code understanding.</ListItem>
            </List>
        </DocsPage>
    );
}