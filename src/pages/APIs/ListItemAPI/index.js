/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";

import {H2, List, ListItem, useLang} from "@material-docs/core";
import ApiPage from "../../../components/ApiPage";
import Link from "@material-docs/core/components/Link/Link";

const importCode = `
import {ListItemAPI} from "@material-docs/core";
// or
import ListItemAPI from "@material-docs/core/components/ListItemAPI";
`.trim();

export default function ListItemAPI() {
    const {lang} = useLang();
    const locale = lang.locale.pages.ListItemAPI;

    return (
        <ApiPage
            name={"ListItem"}
            localeName={"ListItemAPI"}
            overrideName={"MatDoc-ListItem"}
            importCode={importCode}
            properties={[
                {name: "type", type: "\"circle\" | \"square\" | \"upper-roman\" | \"lower-alpha\" | \"none\"", default: "\"circle\"", description: locale.props.type},
                {name: "dense", type: "boolean", default: "false", description: locale.props.dense},
                {name: "children", type: "node", default: "", description: locale.props.children},
            ]}
            css={[
                {name: "root", global: "MatDoc-root", description: locale.css.root},
                {name: "typeCircle", global: "MatDoc-typeCircle", description: locale.css.typeCircle},
                {name: "typeSquare", global: "MatDoc-typeSquare", description: locale.css.typeSquare},
                {name: "typeRoman", global: "MatDoc-typeRoman", description: locale.css.typeRoman},
                {name: "typeAlpha", global: "MatDoc-typeAlpha", description: locale.css.typeAlpha},
                {name: "typeNone", global: "MatDoc-typeNone", description: locale.css.typeNone},
                {name: "list", global: "MatDoc-list", description: locale.css.list},
                {name: "dense", global: "MatDoc-dense", description: locale.css.dense},
            ]}
        >
            <H2>Demos</H2>
            <List>
                <ListItem><Link page={["Components", "Lists"]}>Lists</Link></ListItem>
            </List>
        </ApiPage>
    );
}