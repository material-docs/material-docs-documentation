/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {Link} from "@material-ui/core";

import {H2, List, ListItem, useLang} from "@material-docs/core";
import ApiPage from "../../../components/ApiPage";

const importCode = `
import {TableBody} from "@material-docs/core";
// or
import TableBody from "@material-docs/core/components/TableBody";
`.trim();

export default function TableBodyAPI() {
    const {lang} = useLang();
    const locale = lang.locale.pages.TableBodyAPI;
    const localeSpells = lang.locale.common.spells;
    const componentAPILocale = lang.locale.common.ComponentAPI;

    return (
        <ApiPage
            name={"TableBody"}
            localeName={"TableBodyAPI"}
            overrideName={"MatDoc-TableBody"}
            searchTags={["table", "cell", "row", "header", "api", "body"]}
            importCode={importCode}
            properties={[
                {name: "component", type: "elementType", default: "\"tbody\"", description: locale.props.component},
                {name: "children", type: "node", default: "", description: locale.props.children},
            ]}
            css={[
                {name: "root", global: "MatDoc-root", description: locale.css.root},
            ]}
        >
            <H2>Demos</H2>
            <List>
                <ListItem><Link>Tables</Link></ListItem>
            </List>
        </ApiPage>
    );
}