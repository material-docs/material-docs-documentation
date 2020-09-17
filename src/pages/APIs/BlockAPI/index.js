/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";

import {H2, List, ListItem, useLang} from "@material-docs/core";
import ApiPage from "../../../components/ApiPage";
import Link from "@material-docs/core/components/Link/Link";

const importCode = `
import {Block} from "@material-docs/core";
// or
import Block from "@material-docs/core/components/Block";
`.trim();

export default function BlockAPI() {
    const {lang} = useLang();
    const locale = lang.locale.pages.BlockAPI;
    const localeSpells = lang.locale.common.spells;
    const componentAPILocale = lang.locale.common.ComponentAPI;

    return (
        <ApiPage
            lang={lang}
            localeName={"BlockAPI"}
            searchTags={["block", "tip", "slided", "separated", "blockquote", "quote"]}
            name={"Block"}
            importCode={importCode}
        >
            <H2>Demos</H2>
            <List>
                <ListItem><Link page={["Components", "Text decorators"]}>Text styling</Link></ListItem>
            </List>
        </ApiPage>
    );
}