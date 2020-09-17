/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {Link} from "@material-ui/core";

import {H2, List, ListItem, useLang} from "@danilandreev/material-docs";
import ApiPage from "../../../components/ApiPage";

const importCode = `
import {Table} from "@danilandreev/material-docs";
// or
import Table from "@danilandreev/material-docs/components/Table";
`.trim();

export default function TableAPI() {
    const {lang} = useLang();
    const locale = lang.locale.pages.TableAPI;
    const localeSpells = lang.locale.common.spells;
    const componentAPILocale = lang.locale.common.ComponentAPI;

    return (
        <ApiPage
            lang={lang}
            localeName={"TableAPI"}
            searchTags={["table", "cell", "row", "header", "api"]}
            name={"Table"}
            importCode={importCode}
        >
            <H2>Demos</H2>
            <List>
                <ListItem><Link>Tables</Link></ListItem>
            </List>
        </ApiPage>
    );
}