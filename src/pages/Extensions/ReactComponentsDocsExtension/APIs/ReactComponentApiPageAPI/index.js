/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import ApiPage from "../../../../../components/ApiPage";
import importCode from "./importCode.md";
import H2 from "@material-docs/core/components/H2";
import List from "@material-docs/core/components/List";
import ListItem from "@material-docs/core/components/ListItem";
import Link from "@material-docs/core/components/Link";
import {useLang} from "@material-docs/core";

export default function RCDEReactComponentApiPageAPI() {
    const {lang} = useLang();
    const locale = lang.locale.extensionDocs.ReactComponentsDocsExtension.pages.RCDEReactComponentApiPageAPI;
    return (
        <ApiPage
            name={"RCDE ReactComponentApiPage"}
            locale={locale}
            overrideName={"RCDE-ReactComponentApiPageAPI"}
            localeName={"ReactComponentApiPageAPI"}
            importCode={importCode}
            properties={[
                {name: "props", type: "RCDEProp", default: "", description: locale.props.name},
                {name: "css", type: "RCDEStyle", default: "", description: locale.props.global},
                {name: "children", type: "node", default: "", description: locale.props.children},
            ]}
            enableCss={false}
        >
            <H2>Demos</H2>
            <List>
                <ListItem><Link page={["Extensions", "React Components Docs Extension", "ReactComponentApiPage"]}>
                    React Component Docs Extension
                </Link></ListItem>
            </List>
        </ApiPage>
    );
}
