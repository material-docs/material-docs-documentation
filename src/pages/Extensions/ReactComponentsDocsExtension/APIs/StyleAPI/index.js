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

export default function RCDEStyleAPI() {
    const {lang} = useLang();
    const locale = lang.locale.extensionDocs.ReactComponentsDocsExtension.pages.RCDEStyleAPI;
    return (
        <ApiPage
            name={"RCDE Style"}
            locale={locale}
            overrideName={"RCDE-StyleAPI"}
            localeName={"RCDEStyleAPI"}
            importCode={importCode}
            properties={[
                {name: "name", type: "string | any", default: "", description: locale.props.name},
                {name: "global", type: "string | any", default: "", description: locale.props.global},
                {name: "children", type: "node", default: "", description: locale.props.children},
            ]}
            css={[
                {name: "globalLabel", global: "RCDE-Prop-globalLabel", description: locale.css.globalLabel},
                {name: "nameLabel", global: "RCDE-Prop-typeLabel", description: locale.css.nameLabel},
            ]}
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
