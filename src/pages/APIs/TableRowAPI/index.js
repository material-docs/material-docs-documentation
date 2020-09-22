/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {Link} from "@material-ui/core";

import {H2, List, ListItem, useLang} from "@material-docs/core";
import ApiPage from "../../../components/ApiPage";

const importCode = `
import {TableRow} from "@material-docs/core";
// or
import TableRow from "@material-docs/core/components/TableRow";
`.trim();

export default function TableRowAPI() {
    const {lang} = useLang();
    const locale = lang.locale.pages.TableRowAPI;

    return (
        <ApiPage
            name={"TableRow"}
            localeName={"TableRowAPI"}
            overrideName={"MatDoc-TableRow"}
            importCode={importCode}
            properties={[
                {name: "component", type: "elementType", default: "\"tr\"", description: locale.props.component},
                {name: "hover", type: "boolean", default: "false", description: locale.props.hover},
                {name: "selected", type: "boolean", default: "false", description: locale.props.selected},
                {name: "children", type: "node", default: "", description: locale.props.children},
            ]}
            css={[
                {name: "root", global: "MatDoc-root", description: locale.css.root},
                {name: "selected", global: "MatDoc-selected", description: locale.css.selected},
                {name: "hover", global: "MatDoc-hover", description: locale.css.hover},
                {name: "head", global: "MatDoc-head", description: locale.css.head},
                {name: "footer", global: "MatDoc-footer", description: locale.css.footer},
            ]}
        >
            <H2>Demos</H2>
            <List>
                <ListItem><Link>Tables</Link></ListItem>
            </List>
        </ApiPage>
    );
}