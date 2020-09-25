/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";

import {H2, List, ListItem, useLang, Link} from "@material-docs/core";
import ApiPage from "../../../components/ApiPage";

import importCode from "./importCode.md";

export default function HeaderAPI() {
    const {lang} = useLang();
    const locale = lang.locale.pages.HeaderAPI;

    return (
        <ApiPage
            name={"Header"}
            localeName={"HeaderAPI"}
            overrideName={"MaterialDocs-Header"}
            importCode={importCode}
            properties={[
                {name: "heading", type: "1 | 2 | 3 | 4 | 5 | 6", default: "1", description: locale.props.heading},
                {name: "children", type: "node", default: "", description: locale.props.children},
            ]}
            css={[
                {name: "root", global: "MaterialDocs-root", description: locale.css.root},
                {name: "h1", global: "MaterialDocs-h1", description: locale.css.h1},
                {name: "h2", global: "MaterialDocs-h2", description: locale.css.h2},
                {name: "h3", global: "MaterialDocs-h3", description: locale.css.h3},
                {name: "h4", global: "MaterialDocs-h4", description: locale.css.h4},
                {name: "h5", global: "MaterialDocs-h5", description: locale.css.h5},
                {name: "h6", global: "MaterialDocs-h6", description: locale.css.h6},
            ]}
        >
            <H2>Demos</H2>
            <List>
                <ListItem><Link page={["Components", "Headers"]}>Headers</Link></ListItem>
            </List>
        </ApiPage>
    );
}