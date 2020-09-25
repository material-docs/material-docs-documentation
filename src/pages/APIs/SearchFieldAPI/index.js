/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {Link} from "@material-ui/core";

import {H2, List, ListItem, useLang} from "@material-docs/core";
import ApiPage from "../../../components/ApiPage";

import importCode from "./importCode.md";

export default function SearchFieldAPI() {
    const {lang} = useLang();
    const locale = lang.locale.pages.SearchFieldAPI;

    return (
        <ApiPage
            name={"SearchField"}
            localeName={"SearchFieldAPI"}
            overrideName={"MaterialDocs-DemoWithCode"}
            searchTags={["search", "engine", "selector", "results", "api"]}
            importCode={importCode}
            properties={[
                {name: "searchData", type: "SearchDataItem[]", default: "", description: locale.props.searchData},
                {name: "doSearch", type: "function(query, searchData): Promise<SearchDataItem[]>", default: "", description: locale.props.doSearch},
            ]}
            css={[
                {name: "root", global: "MaterialDocs-root", description: locale.css.root},
                {name: "rootFocused", global: "MaterialDocs-rootFocused", description: locale.css.rootFocused},
                {name: "input", global: "MaterialDocs-input", description: locale.css.input},
                {name: "iconButton", global: "MaterialDocs-iconButton", description: locale.css.iconButton},
                {name: "icon", global: "MaterialDocs-icon", description: locale.css.icon},
                {name: "iconClickable", global: "MaterialDocs-iconClickable", description: locale.css.iconClickable},
                {name: "popper", global: "MaterialDocs-popper", description: locale.css.popper},
                {name: "listPaper", global: "MaterialDocs-listPaper", description: locale.css.listPaper},
            ]}
        >
            <H2>Demos</H2>
            <List>
                <ListItem><Link>Search</Link></ListItem>
            </List>
        </ApiPage>
    );
}