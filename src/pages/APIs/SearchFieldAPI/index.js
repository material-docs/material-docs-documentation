/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {Link} from "@material-ui/core";

import {H2, List, ListItem, useLang} from "@material-docs/core";
import ApiPage from "../../../components/ApiPage";

const importCode = `
import {SearchField} from "@material-docs/core";
// or
import SearchField from "@material-docs/core/components/SearchField";
`.trim();

export default function SearchFieldAPI() {
    const {lang} = useLang();
    const locale = lang.locale.pages.SearchFieldAPI;

    return (
        <ApiPage
            name={"SearchField"}
            localeName={"SearchFieldAPI"}
            overrideName={"MatDoc-DemoWithCode"}
            searchTags={["search", "engine", "selector", "results", "api"]}
            importCode={importCode}
            properties={[
                {name: "searchData", type: "SearchDataItem[]", default: "", description: locale.props.searchData},
                {name: "doSearch", type: "function(query, searchData): Promise<SearchDataItem[]>", default: "", description: locale.props.doSearch},
            ]}
            css={[
                {name: "root", global: "MatDoc-root", description: locale.css.root},
                {name: "rootFocused", global: "MatDoc-rootFocused", description: locale.css.rootFocused},
                {name: "input", global: "MatDoc-input", description: locale.css.input},
                {name: "iconButton", global: "MatDoc-iconButton", description: locale.css.iconButton},
                {name: "icon", global: "MatDoc-icon", description: locale.css.icon},
                {name: "iconClickable", global: "MatDoc-iconClickable", description: locale.css.iconClickable},
                {name: "popper", global: "MatDoc-popper", description: locale.css.popper},
                {name: "listPaper", global: "MatDoc-listPaper", description: locale.css.listPaper},
            ]}
        >
            <H2>Demos</H2>
            <List>
                <ListItem><Link>Search</Link></ListItem>
            </List>
        </ApiPage>
    );
}