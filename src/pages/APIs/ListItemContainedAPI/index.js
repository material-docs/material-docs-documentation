/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";

import {H2, List, ListItem, useLang} from "@material-docs/core";
import ApiPage from "../../../components/ApiPage";
import Link from "@material-docs/core/components/Link/Link";

const importCode = `
import {ListItemContained} from "@material-docs/core";
// or
import ListItemContained from "@material-docs/core/components/ListItemContained";
`.trim();

export default function ListItemContainedAPI() {
    const {lang} = useLang();
    const locale = lang.locale.pages.ListItemContainedAPI;

    return (
        <ApiPage
            name={"ListItemContained"}
            localeName={"ListItemContainedAPI"}
            overrideName={"MatDoc-ListItemContained"}
            importCode={importCode}
            properties={[
                {name: "children", type: "node", default: "", description: locale.props.children},
            ]}
            enableCss={false}
        >
            <H2>Demos</H2>
            <List>
                <ListItem><Link page={["Components", "Lists"]}>Lists</Link></ListItem>
            </List>
        </ApiPage>
    );
}