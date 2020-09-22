/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";

import {H2, List, ListItem, useLang} from "@material-docs/core";
import ApiPage from "../../../components/ApiPage";
import Link from "@material-docs/core/components/Link/Link";

const importCode = `
import {DocsPages} from "@material-docs/core";
// or
import DocsPages from "@material-docs/core/components/DocsPages";
`.trim();

export default function DocsPagesAPI() {
    const {lang} = useLang();
    const locale = lang.locale.pages.DocsPagesAPI;

    return (
        <ApiPage
            name={"DocsPages"}
            localeName={"DocsPagesAPI"}
            overrideName={"MatDoc-DocsPages"}
            importCode={importCode}
            properties={[
                {name: "children", type: "node", default: "", description: locale.props.children},
            ]}
            enableCss={false}
        >
            <H2>Demos</H2>
            <List>
                <ListItem><Link page={["Components", "Layout"]}>Layout</Link></ListItem>
            </List>
        </ApiPage>
    );
}