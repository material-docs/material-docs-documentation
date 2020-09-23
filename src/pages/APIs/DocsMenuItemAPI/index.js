/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";

import {H2, List, ListItem, useLang} from "@material-docs/core";
import ApiPage from "../../../components/ApiPage";
import Link from "@material-docs/core/components/Link/Link";
import importCode from "./importCode.md";

export default function DocsMenuItemAPI() {
    const {lang} = useLang();
    const locale = lang.locale.pages.DocsMenuItemAPI;

    return (
        <ApiPage
            name={"DocsMenuItem"}
            localeName={"DocsMenuItemAPI"}
            overrideName={"MatDoc-DocsMenuItem"}
            importCode={importCode}
            properties={[
                {name: "defaultExpanded", type: "boolean", default: "false", description: locale.props.defaultExpanded},
                {name: "textPrimary", type: "string", default: "", description: locale.props.textPrimary},
                {name: "textSecondary", type: "string", default: "", description: locale.props.textSecondary},
                {name: "icon", type: "string", default: "", description: locale.props.icon},
                {name: "onClick", type: "function(event: any): void", default: "", description: locale.props.onClick},
                {name: "page", type: "string | any", default: "", description: locale.props.page},
                {name: "link", type: "string", default: "", description: locale.props.link},
                {name: "isCurrent", type: "(function(routeParams, pageRoute, page): boolean) | boolean", default: "false", description: locale.props.isCurrent},
                {name: "dense", type: "boolean", default: "false", description: locale.props.dense},
                {name: "children", type: "node", default: "", description: locale.props.children},
            ]}
            css={[
                {name: "root", global: "MatDoc-root", description: locale.css.root},
                {name: "highlighted", global: "MatDoc-highlighted", description: locale.css.highlighted},
                {name: "collapse", global: "MatDoc-collapse", description: locale.css.collapse},
            ]}
        >
            <H2>Demos</H2>
            <List>
                <ListItem><Link page={["Components", "Layout"]}>Layout</Link></ListItem>
            </List>
        </ApiPage>
    );
}