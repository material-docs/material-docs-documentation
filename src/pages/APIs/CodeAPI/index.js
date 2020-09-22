/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {Link} from "@material-ui/core";

import {H2, List, ListItem, useLang} from "@material-docs/core";
import ApiPage from "../../../components/ApiPage";

import importCode from "./importCode.md";

export default function CodeAPI() {
    const {lang} = useLang();
    const locale = lang.locale.pages.CodeAPI;

    return (
        <ApiPage
            name={"Code"}
            localeName={"CodeAPI"}
            overrideName={"MatDocs-Code"}
            importCode={importCode}
            properties={[
                {name: "language", type: "string", default: "\"javascript\"", description: locale.props.language},
                {name: "theme", type: "\"light\" | \"dark\" | \"darcula\"", default: "\"light\"", description: locale.props.theme},
                {name: "children", type: "string", default: "", description: locale.props.children},
            ]}
            css={[
                {name: "root", global: "MatDoc-root", description: locale.css.root},
                {name: "highlighterContainer", global: "MatDoc-highlighterContainer", description: locale.css.highlighterContainer},
            ]}
        >
            <H2>Demos</H2>
            <List>
                <ListItem><Link>Code showing</Link></ListItem>
            </List>
        </ApiPage>
    );
}