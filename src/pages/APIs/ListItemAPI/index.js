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
    const localeSpells = lang.locale.common.spells;
    const componentAPILocale = lang.locale.common.ComponentAPI;

    return (
        <ApiPage
            lang={lang}
            localeName={"ListItemAPI"}
            searchTags={["list", "item", "api"]}
            name={"ListItem"}
            importCode={importCode}
        >
            <H2>Demos</H2>
            <List>
                <ListItem><Link page={["Components", "Lists"]}>Lists</Link></ListItem>
            </List>
        </ApiPage>
    );
}