/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {H2, List, ListItem, useLang, Link} from "@material-docs/core";
import ApiPage from "../../../components/ApiPage";


const importCode = `
import {H6} from "@material-docs/core";
// or
import H6 from "@material-docs/core/components/H6";
`.trim();

export default function H6API() {
    const {lang} = useLang();
    const locale = lang.locale.pages.H6API;

    return (
        <ApiPage
            name={"H6"}
            localeName={"H6API"}
            overrideName={"MatDoc-H6"}
            importCode={importCode}
            properties={[
                {name: "noDivider", type: "boolean", default: "true", description: locale.props.noDivider},
                {name: "noTag", type: "boolean", default: "true", description: locale.props.noTag},
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