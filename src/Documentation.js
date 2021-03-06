/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import logo from "./logo.svg";
import GitHubIcon from '@material-ui/icons/GitHub';
// API pages
import DocsPageAPI from "./pages/APIs/DocsPageAPI";
import DemoWithCodeAPI from "./pages/APIs/DemoWithCodeAPI";
import CodeAPI from "./pages/APIs/CodeAPI";
import PagesGroupAPI from "./pages/APIs/PagesGroupAPI";
import ImageAPI from "./pages/APIs/ImageAPI";
import ListItemAPI from "./pages/APIs/ListItemAPI";
import ExpansionCodeAPI from "./pages/APIs/ExpansionCodeAPI";
import BlockAPI from "./pages/APIs/BlockAPI";
import CodeSpanAPI from "./pages/APIs/CodeSpanAPI";
import ItalicAPI from "./pages/APIs/ItalicAPI";
import ListAPI from "./pages/APIs/ListAPI";
import DocsMenuItemAPI from "./pages/APIs/DocsMenuItemAPI";
import MarkdownAPI from "./pages/APIs/MarkdownAPI";
import TableAPI from "./pages/APIs/TableAPI";
import TableRowAPI from "./pages/APIs/TableRowAPI";
import TableCellAPI from "./pages/APIs/TableCellAPI";
import TableBodyAPI from "./pages/APIs/TableBodyAPI";
import TableHeadAPI from "./pages/APIs/TableHeadAPI";
import BoldAPI from "./pages/APIs/BoldAPI";
import ListItemContainedAPI from "./pages/APIs/ListItemContainedAPI";
import DocsPagesAPI from "./pages/APIs/DocsPagesAPI";
import DocsMenuAPI from "./pages/APIs/DocsMenuAPI";
import DocsLayoutAPI from "./pages/APIs/DocsLayoutAPI";

import AutoDocsMenuAPI from "./pages/APIs/AutoDocsMenuAPI";
import LanguageSelectorAPI from "./pages/APIs/LanguageSelectorAPI";
import SearchFieldAPI from "./pages/APIs/SearchFieldAPI";


import {DocsLayout, DocsPages, PagesGroup} from "@material-docs/core";

import RU from "./locale/RU.json";
import EN from "./locale/EN.json";
import ListsDemo from "./pages/Components/ListsDemo";
import Installation from "./pages/GettingStarted/Installation";
import LayoutDemo from "./pages/Components/LayoutDemo";
import DocsMenu from "@material-docs/core/components/DocsMenu/DocsMenu";
import AutoDocsMenu from "@material-docs/core/components/AutoDocsMenu/AutoDocsMenu";
import Landing from "@material-docs/core/components/Landing/Landing";
import MaterialDocsLanding from "./pages/MaterialDocsLanding";
import CreatingMaterialDocs from "./pages/Tutorials/CreatingMaterialDocs";
import HeadersDemo from "./pages/Components/HeadersDemo";
import MarkdownDemo from "./pages/Components/MarkdownDemo";
import TextStylingDemo from "./pages/Components/TextStylingDemo";
import ImagesDemo from "./pages/Components/ImagesDemo";
import TagableAPI from "./pages/APIs/TagableAPI";
import H1API from "./pages/APIs/H1API";
import H2API from "./pages/APIs/H2API";
import H3API from "./pages/APIs/H3API";
import H4API from "./pages/APIs/H4API";
import H5API from "./pages/APIs/H5API";
import H6API from "./pages/APIs/H6API";
import HeaderAPI from "./pages/APIs/HeaderAPI";
import RCDEPropAPI from "./pages/Extensions/ReactComponentsDocsExtension/APIs/PropAPI";
import RCDEReactComponentApiPageAPI
    from "./pages/Extensions/ReactComponentsDocsExtension/APIs/ReactComponentApiPageAPI";
import RCDEStyleAPI from "./pages/Extensions/ReactComponentsDocsExtension/APIs/StyleAPI";
import ReactComponentApiPageDemo
    from "./pages/Extensions/ReactComponentsDocsExtension/Components/ReactComponentApiPageDemo";
import CodeDemo from "./pages/Components/CodeDemo";
import TablesDemo from "./pages/Components/TablesDemo";
import LangProviderAPI from "./pages/APIs/LangProviderAPI";
import LocaleAPI from "./pages/APIs/LocaleAPI";
import LandingAPI from "./pages/APIs/LandingAPI";
import LinkAPI from "./pages/APIs/LinkAPI";
import HostingMaterialDocsOnGHPages from "./pages/Tutorials/HostingMaterialDocsOnGHPages";
import AdvancedMaterialDocsUsage from "./pages/Tutorials/LocalizationWorkflow";
import Introduction from "./pages/GettingStarted/Introduction";


export default function Documentation() {
    return (
        <DocsLayout
            defaultLang={EN}
            langs={[EN, RU]}
            basename={process.env.PUBLIC_URL}
            name={"Material Docs"}
            logo={logo}
            description={"material-docs - react framework for easy creating documentation site in material design style."}
            keywords={[
                "material-design",
                "material-ui",
                "documentation",
                "documentation-tool",
                "framework",
                "components-library",
                "markdown",
                "markdown-converter"
            ]}
            version={"1.0.0"}
            actions={[
                {
                    icon: <GitHubIcon/>,
                    link: "https://github.com/DanilAndreev/material-docs",
                    tooltip: "Github source code"
                }
            ]}
            onVersionClick={() => window.location = "https://github.com/material-docs/material-docs/releases"}
        >
            <DocsMenu dense>
                <AutoDocsMenu/>
            </DocsMenu>
            <Landing>
                <MaterialDocsLanding/>
            </Landing>
            <DocsPages>
                <PagesGroup name={"Getting started"} order={1}>
                    <Introduction/>
                    <Installation/>
                </PagesGroup>
                <PagesGroup name={"Tutorials"} order={2}>
                    <CreatingMaterialDocs/>
                    <HostingMaterialDocsOnGHPages/>
                    <AdvancedMaterialDocsUsage/>
                </PagesGroup>
                <PagesGroup name={"Components"} order={3}>
                    <CodeDemo/>
                    <ListsDemo/>
                    <LayoutDemo/>
                    <HeadersDemo/>
                    <MarkdownDemo/>
                    <TextStylingDemo/>
                    <ImagesDemo/>
                    <TablesDemo/>
                </PagesGroup>
                <PagesGroup name={"Component APIs"} order={4}>
                    <DocsLayoutAPI/>
                    <DocsPageAPI/>
                    <DemoWithCodeAPI/>
                    <CodeAPI/>
                    <PagesGroupAPI/>
                    <ImageAPI/>
                    <ListItemAPI/>
                    <ExpansionCodeAPI/>
                    <BlockAPI/>
                    <CodeSpanAPI/>
                    <ItalicAPI/>
                    <BoldAPI/>
                    <ListAPI/>
                    <DocsMenuItemAPI/>
                    <MarkdownAPI/>
                    <TableAPI/>
                    <TableRowAPI/>
                    <TableCellAPI/>
                    <TableBodyAPI/>
                    <TableHeadAPI/>
                    <ListItemContainedAPI/>
                    <DocsPagesAPI/>
                    <DocsMenuAPI/>
                    <H1API/>
                    <H2API/>
                    <H3API/>
                    <H4API/>
                    <H5API/>
                    <H6API/>
                    <HeaderAPI/>
                    <AutoDocsMenuAPI/>
                    <LocaleAPI/>
                    <LandingAPI/>
                    <LinkAPI/>
                    <PagesGroup name={"System components"}>
                        <LangProviderAPI/>
                        <LanguageSelectorAPI/>
                        <SearchFieldAPI/>
                        <TagableAPI/>
                    </PagesGroup>
                </PagesGroup>
                <PagesGroup name={"System"} order={5}>

                </PagesGroup>
                <PagesGroup name={"Extensions"} order={6}>
                    <PagesGroup name={"React Components Docs Extension"}>
                        <ReactComponentApiPageDemo/>
                        <PagesGroup name={"Component API"}>
                            <RCDEPropAPI/>
                            <RCDEStyleAPI/>
                            <RCDEReactComponentApiPageAPI/>
                        </PagesGroup>
                    </PagesGroup>
                </PagesGroup>
            </DocsPages>
        </DocsLayout>
    );
}