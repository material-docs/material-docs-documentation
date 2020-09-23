/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";

import {H2, List, ListItem, useLang, Link} from "@material-docs/core";
import ApiPage from "../../../components/ApiPage";

import importCode from "./importCode.md";

export default function H2API() {
    const {lang} = useLang();
    const locale = lang.locale.pages.H2API;

    return (
        <ApiPage
            name={"H2"}
            localeName={"H2API"}
            overrideName={"MatDoc-H2"}
            importCode={importCode}
            properties={[
                {name: "noDivider", type: "boolean", default: "false", description: locale.props.noDivider},
                {name: "noTag", type: "boolean", default: "false", description: locale.props.noTag},
                {name: "id", type: "string", default: "", description: locale.props.id},
                {name: "children", type: "node", default: "", description: locale.props.children},
            ]}
            css={[
                {name: "root", global: "MatDoc-root", description: locale.css.root},
                {name: "h1", global: "MatDoc-h1", description: locale.css.h1},
            ]}
        >
            <H2>Demos</H2>
            <List>
                <ListItem><Link page={["Components", "Headers"]}>Headers</Link></ListItem>
            </List>
        </ApiPage>
    );
}