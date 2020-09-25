/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {H2, List, ListItem, useLang} from "@material-docs/core";
import ApiPage from "../../../components/ApiPage";


import importCode from "./importCode.md";
import Link from "@material-docs/core/components/Link";

export default function DemoWithCodeAPI() {
    const {lang} = useLang();
    const locale = lang.locale.pages.DemoWithCodeAPI;

    return (
        <ApiPage
            name={"DemoWithCode"}
            overrideName={"MatDoc-DemoWithCode"}
            localeName={"DemoWithCodeAPI"}
            importCode={importCode}
            properties={[
                {name: "name", type: "string", default: "", description: locale.props.name},
                {name: "code", type: "string", default: "", description: locale.props.code},
                {name: "ratio", type: "AspectRatio", default: "", description: locale.props.ratio},
                {name: "defaultExpanded", type: "boolean", default: "false", description: locale.props.defaultExpanded},
                {name: "noTag", type: "boolean", default: "false", description: locale.props.noTag},
                {name: "paperContainer", type: "boolean", default: "false", description: locale.props.paperContainer},
                {name: "actions", type: "DemoCodeAction[]", default: "", description: locale.props.actions},
                {name: "p", type: "number", default: "0", description: locale.props.p},
                {name: "m", type: "number", default: "0", description: locale.props.m},
                {name: "children", type: "node", default: "", description: locale.props.children},
                {name: "theme", type: "\"light\" | \"dark\" | \"darcula\"", default: "", description: locale.props.theme},
                {name: "themeLight", type: "\"light\" | \"dark\" | \"darcula\"", default: "\"light\"", description: locale.props.themeLight},
                {name: "themeDark", type: "\"light\" | \"dark\" | \"darcula\"", default: "\"dark\"", description: locale.props.themeDark},
            ]}
            css={[
                {name: "root", global: "MatDoc-root", description: locale.css.root},
                {name: "collapse", global: "MatDoc-collapse", description: locale.css.collapse},
                {name: "toolbar", global: "MatDoc-toolbar", description: locale.css.toolbar},
                {name: "paperContainer", global: "MatDoc-paperContainer", description: locale.css.paperContainer},
                {name: "menuButtonLink", global: "MatDoc-menuButtonLink", description: locale.css.menuButtonLink},
                {name: "demo", global: "MatDoc-demo", description: locale.css.demo},
            ]}
        >
            <H2>Demos</H2>
            <List>
                <ListItem><Link page={["Components", "Code showers"]}>Code showing</Link></ListItem>
            </List>
        </ApiPage>
    );
}