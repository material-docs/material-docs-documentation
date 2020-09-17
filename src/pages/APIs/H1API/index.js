/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";

import {H2, List, ListItem, useLang, Link} from "@material-docs/core";
import ApiPage from "../../../components/ApiPage";

const importCode = `
import {H1} from "@material-docs/core";
// or
import H1 from "@material-docs/core/components/H1";
`.trim();

export default function H1API() {
    const {lang} = useLang();
    const locale = lang.locale.pages.H1API;
    const localeSpells = lang.locale.common.spells;
    const componentAPILocale = lang.locale.common.ComponentAPI;

    return (
        <ApiPage
            lang={lang}
            localeName={"H1API"}
            searchTags={["h1", "header", "tag", "anchor", "api"]}
            name={"H1"}
            importCode={importCode}
        >
            <H2>Demos</H2>
            <List>
                <ListItem><Link page={["Components", "Headers"]}>Headers</Link></ListItem>
            </List>
        </ApiPage>
    );
}