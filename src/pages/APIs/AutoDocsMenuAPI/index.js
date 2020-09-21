/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";

import {H2, List, ListItem, useLang} from "@material-docs/core";
import ApiPage from "../../../components/ApiPage";
import Link from "@material-docs/core/components/Link/Link";
import ReactComponentApiPage from "@material-docs/react-components-docs-extension/components/ReactComponentApiPage";
import ReactComponentApiPageSummary
    from "@material-docs/react-components-docs-extension/components/ReactComponentApiPageSummary";
import ReactComponentApiPageImport
    from "@material-docs/react-components-docs-extension/components/ReactComponentApiPageImport";
import ReactComponentApiPageProps
    from "@material-docs/react-components-docs-extension/components/ReactComponentApiPageProps";
import ReactComponentApiPageStyles
    from "@material-docs/react-components-docs-extension/components/ReactComponentApiPageStyles";
import ReactComponentApiPageFooter
    from "@material-docs/react-components-docs-extension/components/ReactComponentApiPageFooter";
import Style from "@material-docs/react-components-docs-extension/components/Style";
import Prop from "@material-docs/react-components-docs-extension/components/Prop";
import Markdown from "@material-docs/core/components/Markdown/Markdown";
import H3 from "@material-docs/core/components/H3";
import Code from "@material-docs/core/components/Code/Code";
import importCode from "./importCode.md";

export default function AutoDocsMenuAPI() {
    const {lang} = useLang();
    const locale = lang.locale.pages.AutoDocsMenuAPI;
    const localeSpells = lang.locale.common.spells;
    const componentAPILocale = lang.locale.common.ComponentAPI;

    return (
        <ReactComponentApiPage
            name={"AutoDocsMenu"}
            searchDescription={"AutoDocsMenu - react component for creating automated menu."}

            searchTags={["auto", "menu", "docs", "system", "api"]}
        >
            <ReactComponentApiPageSummary>
                <H3 noTag noDivider>
                    <Markdown data={{name: "AutoDocsMenu"}} typographyInheritSize inline>
                        The API documentation of the &&name React component. Learn more about the props and the CSS customization points.
                    </Markdown>
                </H3>
            </ReactComponentApiPageSummary>
            <ReactComponentApiPageImport>
                <Code theme={"darcula"}>{importCode}</Code>
                <Markdown>
                    You can learn more about the difference by [reading this guide](https://material-ui.com/guides/minimizing-bundle-size/).
                    ## Component name

                </Markdown>
            </ReactComponentApiPageImport>
            <ReactComponentApiPageProps>
                <Prop name={"children"} type={"node"} def={"null"}>Children of an element</Prop>
                <Prop name={"name"} type={"string"} def={"\"\""}>Your name</Prop>
            </ReactComponentApiPageProps>
            <ReactComponentApiPageStyles>
                <Style name={"root"} global={"Mui-root"}>Styles applied to the root element</Style>
                <Style name={"link"} global={"Mui-link"}>Styles applied to the link element</Style>
            </ReactComponentApiPageStyles>
            <ReactComponentApiPageFooter>
                More information...
            </ReactComponentApiPageFooter>
        </ReactComponentApiPage>
    );
}