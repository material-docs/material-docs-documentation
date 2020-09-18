/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";

import {H2, List, ListItem, useLang} from "@material-docs/core";
import ApiPage from "../../../components/ApiPage";
import Link from "@material-docs/core/components/Link/Link";

const importCode = `
import {Markdown} from "@material-docs/core";
// or
import Markdown from "@material-docs/core/components/Markdown";
`.trim();

export default function MarkdownAPI() {
    const {lang} = useLang();
    const locale = lang.locale.pages.MarkdownAPI;
    const localeSpells = lang.locale.common.spells;
    const componentAPILocale = lang.locale.common.ComponentAPI;

    return (
        <ApiPage
            lang={lang}
            localeName={"MarkdownAPI"}
            searchTags={["mark", "down", "parser", "interpret", "layout", "api"]}
            name={"Markdown"}
            importCode={importCode}
        >
            <H2>Demos</H2>
            <List>
                <ListItem><Link page={["Components", "Markdown"]}>Markdown</Link></ListItem>
            </List>
        </ApiPage>
    );
}