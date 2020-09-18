/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";

import {H2, List, ListItem, useLang} from "@material-docs/core";
import ApiPage from "../../../components/ApiPage";
import Link from "@material-docs/core/components/Link/Link";

const importCode = `
import {DocsMenu} from "@material-docs/core";
// or
import DocsMenu from "@material-docs/core/components/DocsMenu";
`.trim();

export default function DocsMenuAPI() {
    const {lang} = useLang();
    const locale = lang.locale.pages.DocsMenuAPI;
    const localeSpells = lang.locale.common.spells;
    const componentAPILocale = lang.locale.common.ComponentAPI;

    return (
        <ApiPage
            lang={lang}
            localeName={"DocsMenuAPI"}
            searchTags={["docs", "menu", "container", "api"]}
            name={"DocsMenu"}
            importCode={importCode}
        >
            <H2>Demos</H2>
            <List>
                <ListItem><Link page={["Components", "Layout"]}>Layout</Link></ListItem>
            </List>
        </ApiPage>
    );
}