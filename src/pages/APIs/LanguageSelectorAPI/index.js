/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {Link} from "@material-ui/core";

import {H2, List, ListItem, useLang} from "@material-docs/core";
import ApiPage from "../../../components/ApiPage";

const importCode = `
import {LanguageSelector} from "@material-docs/core";
// or
import LanguageSelector from "@material-docs/core/components/LanguageSelector";
`.trim();

export default function LanguageSelectorAPI() {
    const {lang} = useLang();
    const locale = lang.locale.pages.LanguageSelectorAPI;

    return (
        <ApiPage
            name={"LanguageSelector"}
            localeName={"LanguageSelectorAPI"}
            overrideName={"MatDoc-LanguageSelector"}
            searchTags={["language", "locale", "select", "api"]}
            importCode={importCode}
            properties={[
                {name: "size", type: "\"small\" | \"large\"", default: "\"large\"", description: locale.props.size},
            ]}
            css={[
                {name: "root", global: "MatDoc-root", description: locale.css.root},
            ]}
        >
            <H2>Demos</H2>
            <List>
                <ListItem><Link>Locales</Link></ListItem>
            </List>
        </ApiPage>
    );
}