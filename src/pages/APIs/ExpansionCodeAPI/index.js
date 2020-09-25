/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {H2, List, ListItem, useLang} from "@material-docs/core";
import ApiPage from "../../../components/ApiPage";

import importCode from "./importCode.md";
import Link from "@material-docs/core/components/Link";

export default function ExpansionCodeAPI() {
    const {lang} = useLang();
    const locale = lang.locale.pages.ExpansionCodeAPI;

    return (
        <ApiPage
            name={"ExpansionCode"}
            localeName={"ExpansionCodeAPI"}
            overrideName={"MaterialDocs-ExpansionCode"}
            searchTags={["demo", "with", "code", "api"]}
            importCode={importCode}
            properties={[
                {name: "name", type: "string", default: "", description: locale.props.name},
                {name: "noTag", type: "boolean", default: "false", description: locale.props.noTag},
                {name: "collapsedHeight", type: "number | string", default: "100px", description: locale.props.collapsedHeight},
                {name: "actions", type: "DemoCodeAction[]", default: "", description: locale.props.actions},
                {name: "theme", type: "\"light\" | \"dark\" | \"darcula\"", default: "", description: locale.props.theme},
                {name: "themeLight", type: "\"light\" | \"dark\" | \"darcula\"", default: "\"light\"", description: locale.props.themeLight},
                {name: "themeDark", type: "\"light\" | \"dark\" | \"darcula\"", default: "\"dark\"", description: locale.props.themeDark},
                {name: "language", type: "string", default: "\"javascript\"", description: locale.props.language},
                {name: "children", type: "node", default: "", description: locale.props.children},
            ]}
            css={[
                {name: "root", global: "MaterialDocs-root", description: locale.css.root},
                {name: "collapsedCode", global: "MaterialDocs-collapsedCode", description: locale.css.collapsedCode},
                {name: "collapse", global: "MaterialDocs-collapse", description: locale.css.collapse},
                {name: "toolbar", global: "MaterialDocs-toolbar", description: locale.css.toolbar},
                {name: "codeName", global: "MaterialDocs-codeName", description: locale.css.codeName},
                {name: "menuButtonLink", global: "MaterialDocs-menuButtonLink", description: locale.css.menuButtonLink},
            ]}
        >
            <H2>Demos</H2>
            <List>
                <ListItem><Link page={["Components", "Code showers"]}>Code showing</Link></ListItem>
            </List>
        </ApiPage>
    );
}