/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";

import {H2, List, ListItem, useLang, Link} from "@material-docs/core";
import ApiPage from "../../../components/ApiPage";

import importCode from "./importCode.md";

export default function TagableAPI() {
    const {lang} = useLang();
    const locale = lang.locale.pages.TagableAPI;

    return (
        <ApiPage
            name={"Tagable"}
            localeName={"TagableAPI"}
            overrideName={"MaterialDocs-Tagable"}
            importCode={importCode}
            properties={[
                {name: "variant", type: "\"h1\" | \"h2\" | \"h3\" | \"h4\" | \"h5\"", default: "\"h1\"", description: locale.props.variant},
                {name: "noDivider", type: "boolean", default: "false", description: locale.props.noDivider},
                {name: "noTag", type: "boolean", default: "false", description: locale.props.noTag},
                {name: "id", type: "string", default: "", description: locale.props.id},
                {name: "children", type: "node", default: "", description: locale.props.children},
            ]}
            css={[
                {name: "root", global: "MaterialDocs-root", description: locale.css.root},
                {name: "container", global: "MaterialDocs-container", description: locale.css.container},
                {name: "h1", global: "MaterialDocs-h1", description: locale.css.h1},
                {name: "h2", global: "MaterialDocs-h2", description: locale.css.h2},
                {name: "h3", global: "MaterialDocs-h3", description: locale.css.h3},
                {name: "h4", global: "MaterialDocs-h4", description: locale.css.h4},
                {name: "h5", global: "MaterialDocs-h5", description: locale.css.h5},
                {name: "h6", global: "MaterialDocs-h6", description: locale.css.h6},
                {name: "anchor", global: "MaterialDocs-anchor", description: locale.css.anchor},
                {name: "divider", global: "MaterialDocs-divider", description: locale.css.divider},
                {name: "typography", global: "MaterialDocs-typography", description: locale.css.typography},
                {name: "textBlock", global: "MaterialDocs-textBlock", description: locale.css.textBlock},
                {name: "anchorIcon", global: "MaterialDocs-anchorIcon", description: locale.css.anchorIcon},
            ]}
        >
            <H2>Demos</H2>
            <List>
                <ListItem><Link page={["Components", "Headers"]}>Headers</Link></ListItem>
            </List>
        </ApiPage>
    );
}