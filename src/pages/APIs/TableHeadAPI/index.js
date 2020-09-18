/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {Link} from "@material-ui/core";

import {H2, List, ListItem, useLang} from "@material-docs/core";
import ApiPage from "../../../components/ApiPage";

const importCode = `
import {TableHead} from "@material-docs/core";
// or
import TableHead from "@material-docs/core/components/TableHead";
`.trim();

export default function TableHeadAPI() {
    const {lang} = useLang();
    const locale = lang.locale.pages.TableHeadAPI;
    const localeSpells = lang.locale.common.spells;
    const componentAPILocale = lang.locale.common.ComponentAPI;

    return (
        <ApiPage
            lang={lang}
            localeName={"TableHeadAPI"}
            searchTags={["table", "cell", "row", "header", "api", "head"]}
            name={"TableHead"}
            importCode={importCode}
        >
            <H2>Demos</H2>
            <List>
                <ListItem><Link>Tables</Link></ListItem>
            </List>
        </ApiPage>
    );
}