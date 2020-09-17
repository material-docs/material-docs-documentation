/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {Link} from "@material-ui/core";

import {H2, List, ListItem, useLang} from "@danilandreev/material-docs";
import ApiPage from "../../../components/ApiPage";

const importCode = `
import {ExpansionCode} from "@danilandreev/material-docs";
// or
import ExpansionCode from "@danilandreev/material-docs/components/ExpansionCode";
`.trim();

export default function ExpansionCodeAPI() {
    const {lang} = useLang();
    const locale = lang.locale.pages.ExpansionCodeAPI;
    const localeSpells = lang.locale.common.spells;
    const componentAPILocale = lang.locale.common.ComponentAPI;

    return (
        <ApiPage
            lang={lang}
            localeName={"ExpansionCodeAPI"}
            searchTags={["demo", "with", "code", "api"]}
            name={"ExpansionCode"}
            importCode={importCode}
        >
            <H2>Demos</H2>
            <List>
                <ListItem><Link>Code showing</Link></ListItem>
            </List>
        </ApiPage>
    );
}