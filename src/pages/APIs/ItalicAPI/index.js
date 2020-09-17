/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";

import {H2, List, ListItem, useLang} from "@danilandreev/material-docs";
import ApiPage from "../../../components/ApiPage";
import Link from "@danilandreev/material-docs/components/Link/Link";

const importCode = `
import {Italic} from "@danilandreev/material-docs";
// or
import Italic from "@danilandreev/material-docs/components/Italic";
`.trim();

export default function ItalicAPI() {
    const {lang} = useLang();
    const locale = lang.locale.pages.ItalicAPI;
    const localeSpells = lang.locale.common.spells;
    const componentAPILocale = lang.locale.common.ComponentAPI;

    return (
        <ApiPage
            lang={lang}
            localeName={"ItalicAPI"}
            searchTags={["italic", "font", "text", "styling", "api"]}
            name={"Italic"}
            importCode={importCode}
        >
            <H2>Demos</H2>
            <List>
                <ListItem><Link page={["Components", "Text decorators"]}>Text styling</Link></ListItem>
            </List>
        </ApiPage>
    );
}