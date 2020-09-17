/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";

import {H2, List, ListItem, useLang} from "@danilandreev/material-docs";
import ApiPage from "../../../components/ApiPage";
import Link from "@danilandreev/material-docs/components/Link/Link";

const importCode = `
import {ListItemContained} from "@danilandreev/material-docs";
// or
import ListItemContained from "@danilandreev/material-docs/components/ListItemContained";
`.trim();

export default function ListItemContainedAPI() {
    const {lang} = useLang();
    const locale = lang.locale.pages.ListItemContainedAPI;
    const localeSpells = lang.locale.common.spells;
    const componentAPILocale = lang.locale.common.ComponentAPI;

    return (
        <ApiPage
            lang={lang}
            localeName={"ListItemContainedAPI"}
            searchTags={["list", "item", "contain", "api"]}
            name={"ListItemContained"}
            importCode={importCode}
        >
            <H2>Demos</H2>
            <List>
                <ListItem><Link page={["Components", "Lists"]}>Lists</Link></ListItem>
            </List>
        </ApiPage>
    );
}