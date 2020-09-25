/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {H2, List, ListItem, useLang} from "@material-docs/core";
import ApiPage from "../../../components/ApiPage";

import importCode from "./importCode.md";
import Link from "@material-docs/core/components/Link";

export default function TableBodyAPI() {
    const {lang} = useLang();
    const locale = lang.locale.pages.TableBodyAPI;
    const localeSpells = lang.locale.common.spells;
    const componentAPILocale = lang.locale.common.ComponentAPI;

    return (
        <ApiPage
            name={"TableBody"}
            localeName={"TableBodyAPI"}
            overrideName={"MuiTableBody"}
            searchTags={["table", "cell", "row", "header", "api", "body"]}
            importCode={importCode}
            properties={[
                {name: "component", type: "elementType", default: "\"tbody\"", description: locale.props.component},
                {name: "children", type: "node", default: "", description: locale.props.children},
            ]}
            css={[
                {name: "root", global: "MaterialDocs-root", description: locale.css.root},
            ]}
        >
            <H2>Demos</H2>
            <List>
                <ListItem><Link page={["Components", "Tables"]}>Tables</Link></ListItem>
            </List>
        </ApiPage>
    );
}