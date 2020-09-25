/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";

import {H2, List, ListItem, useLang} from "@material-docs/core";
import ApiPage from "../../../components/ApiPage";
import Link from "@material-docs/core/components/Link/Link";

import importCode from "./importCode.md";

export default function DocsLayoutAPI() {
    const {lang} = useLang();
    const locale = lang.locale.pages.DocsLayoutAPI;

    return (
        <ApiPage
            name={"DocsLayout"}
            overrideName={"MatDoc-DocsLayout"}
            localeName={"DocsLayoutAPI"}
            searchTags={["docs", "layout", "main", "component", "api"]}
            importCode={importCode}
            properties={[
                {name: "searchData", type: "SearchDataItem[]", default: "", description: locale.props.searchData},
                {name: "noGenerateAutoSearch", type: "boolean", default: "false", description: locale.props.noGenerateAutoSearch},
                {name: "defaultLang", type: "Lang", default: "", description: locale.props.defaultLang},
                {name: "langs", type: "Lang[]", default: "", description: locale.props.langs},
                {name: "onHelpToTranslate", type: "function(lang: Lang): void", default: "", description: locale.props.noTag},
                {name: "router", type: "\"hash-router\" | \"browser-router\"", default: "\"browser-router\"", description: locale.props.router},
                {name: "basename", type: "string", default: "", description: locale.props.basename},
                {name: "mask", type: "string", default: "\"/*page\"", description: locale.props.mask},
                {name: "noSearchField", type: "boolean", default: "false", description: locale.props.noSearchField},
                {name: "noLanguageSelector", type: "boolean", default: "false", description: locale.props.noLanguageSelector},
                {name: "actions", type: "AppBarAction[]", default: "[]", description: locale.props.actions},
                {name: "keywords", type: "string[]", default: "", description: locale.props.basename},
                {name: "author", type: "string", default: "", description: locale.props.author},
                {name: "description", type: "string", default: "", description: locale.props.description},
                {name: "name", type: "string", default: "", description: locale.props.name},
                {name: "version", type: "string", default: "", description: locale.props.version},
                {name: "logo", type: "string", default: "", description: locale.props.logo},
                {name: "onNameClick", type: "function(event: Event): void", default: "", description: locale.props.logo},
                {name: "onVersionClick", type: "function(event: Event): void", default: "", description: locale.props.logo},
                {name: "children", type: "node", default: "", description: locale.props.children},
            ]}
            css={[
                {name: "root", global: "MatDoc-root", description: locale.css.root},
                {name: "appBar", global: "MatDoc-appBar", description: locale.css.appBar},
                {name: "appBarShift", global: "MatDoc-appBarShift", description: locale.css.appBarShift},
                {name: "menuButton", global: "MatDoc-menuButton", description: locale.css.menuButton},
                {name: "hide", global: "MatDoc-hide", description: locale.css.hide},
                {name: "drawer", global: "MatDoc-drawer", description: locale.css.drawer},
                {name: "drawerPaper", global: "MatDoc-drawerPaper", description: locale.css.drawerPaper},
                {name: "drawerHeader", global: "MatDoc-drawerHeader", description: locale.css.drawerHeader},
                {name: "content", global: "MatDoc-content", description: locale.css.content},
                {name: "contentShift", global: "MatDoc-contentShift", description: locale.css.contentShift},
                {name: "headerText", global: "MatDoc-headerText", description: locale.css.headerText},
                {name: "toolbar", global: "MatDoc-toolbar", description: locale.css.toolbar},
                {name: "headerIcon", global: "MatDoc-headerIcon", description: locale.css.headerIcon},
                {name: "version", global: "MatDoc-version", description: locale.css.version},
            ]}
        >
            <H2>Demos</H2>
            <List>
                <ListItem><Link page={["Components", "Layout"]}>Layout</Link></ListItem>
            </List>
        </ApiPage>
    );
}