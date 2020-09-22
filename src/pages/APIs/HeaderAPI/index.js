/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";

import {H2, List, ListItem, useLang, Link} from "@material-docs/core";
import ApiPage from "../../../components/ApiPage";

const importCode = `
import {Header} from "@material-docs/core";
// or
import Header from "@material-docs/core/components/Header";
`.trim();

export default function HeaderAPI() {
    const {lang} = useLang();
    const locale = lang.locale.pages.HeaderAPI;

    return (
        <ApiPage
            name={"Header"}
            localeName={"HeaderAPI"}
            overrideName={"MatDoc-Header"}
            importCode={importCode}
            properties={[
                {name: "heading", type: "1 | 2 | 3 | 4 | 5 | 6", default: "1", description: locale.props.heading},
                {name: "children", type: "node", default: "", description: locale.props.children},
            ]}
            css={[
                {name: "root", global: "MatDoc-root", description: locale.css.root},
                {name: "h1", global: "MatDoc-h1", description: locale.css.h1},
                {name: "h2", global: "MatDoc-h2", description: locale.css.h2},
                {name: "h3", global: "MatDoc-h3", description: locale.css.h3},
                {name: "h4", global: "MatDoc-h4", description: locale.css.h4},
                {name: "h5", global: "MatDoc-h5", description: locale.css.h5},
                {name: "h6", global: "MatDoc-h6", description: locale.css.h6},
            ]}
        >
            <H2>Demos</H2>
            <List>
                <ListItem><Link page={["Components", "Headers"]}>Headers</Link></ListItem>
            </List>
        </ApiPage>
    );
}