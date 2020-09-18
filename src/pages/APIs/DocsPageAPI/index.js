/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";

import {H2, List, ListItem, useLang} from "@material-docs/core";
import ApiPage from "../../../components/ApiPage";
import Link from "@material-docs/core/components/Link/Link";

const importCode = `
import {DocsPage} from "@material-docs/core";
// or
import DocsPage from "@material-docs/core/components/DocsPage";
`.trim();

export default function DocsPageAPI() {
    const {lang} = useLang();
    const locale = lang.locale.pages.DocsPageAPI;
    const localeSpells = lang.locale.common.spells;
    const componentAPILocale = lang.locale.common.ComponentAPI;

    return (
        <ApiPage
            lang={lang}
            localeName={"DocsPageAPI"}
            searchTags={["docs", "page", "api"]}
            name={"DocsPage"}
            importCode={importCode}
        >
            <H2>Demos</H2>
            <List>
                <ListItem><Link page={["Components", "Layout"]}>Layout</Link></ListItem>
            </List>
        </ApiPage>
    );
}