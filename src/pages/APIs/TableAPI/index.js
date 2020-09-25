/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {H2, List, ListItem, useLang} from "@material-docs/core";
import ApiPage from "../../../components/ApiPage";

import importCode from "./importCode.md";
import Link from "@material-docs/core/components/Link";

export default function TableAPI() {
    const {lang} = useLang();
    const locale = lang.locale.pages.TableAPI;
    const localeSpells = lang.locale.common.spells;
    const componentAPILocale = lang.locale.common.ComponentAPI;

    return (
        <ApiPage
            name={"Table"}
            localeName={"TableAPI"}
            overrideName={"MaterialDocs-Table"}
            importCode={importCode}
            properties={[
                {name: "component", type: "elementType", default: "\"table\"", description: locale.props.component},
                {name: "padding", type: "\"default\" | \"checkbox\" | \"none\"", default: "\"default\"", description: locale.props.padding},
                {name: "size", type: "\"small\" | \"medium\"", default: "\"medium\"", description: locale.props.size},
                {name: "stickyHeader", type: "boolean", default: "false", description: locale.props.stickyHeader},
                {name: "children", type: "node", default: "", description: locale.props.children},
            ]}
            css={[
                {name: "root", global: "MaterialDocs-root", description: locale.css.root},
                {name: "stickyHeader", global: "MaterialDocs-stickyHeader", description: locale.css.stickyHeader},
            ]}
        >
            <H2>Demos</H2>
            <List>
                <ListItem><Link page={["Components", "Tables"]}>Tables</Link></ListItem>
            </List>
        </ApiPage>
    );
}