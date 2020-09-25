/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {H2, List, ListItem, useLang} from "@material-docs/core";
import ApiPage from "../../../components/ApiPage";

import importCode from "./importCode.md";
import Link from "@material-docs/core/components/Link";

export default function CodeAPI() {
    const {lang} = useLang();
    const locale = lang.locale.pages.CodeAPI;

    return (
        <ApiPage
            name={"Code"}
            localeName={"CodeAPI"}
            overrideName={"MaterialDocss-Code"}
            importCode={importCode}
            properties={[
                {name: "language", type: "string", default: "\"javascript\"", description: locale.props.language},
                {name: "theme", type: "\"light\" | \"dark\" | \"darcula\"", default: "", description: locale.props.theme},
                {name: "themeLight", type: "\"light\" | \"dark\" | \"darcula\"", default: "\"light\"", description: locale.props.themeLight},
                {name: "themeDark", type: "\"light\" | \"dark\" | \"darcula\"", default: "\"dark\"", description: locale.props.themeDark},
                {name: "children", type: "string", default: "", description: locale.props.children},
            ]}
            css={[
                {name: "root", global: "MaterialDocs-root", description: locale.css.root},
                {name: "highlighterContainer", global: "MaterialDocs-highlighterContainer", description: locale.css.highlighterContainer},
            ]}
        >
            <H2>Demos</H2>
            <List>
                <ListItem><Link page={["Components", "Code showers"]}>Code showing</Link></ListItem>
            </List>
        </ApiPage>
    );
}