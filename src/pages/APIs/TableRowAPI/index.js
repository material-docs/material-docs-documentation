/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {H2, List, ListItem, useLang} from "@material-docs/core";
import ApiPage from "../../../components/ApiPage";
import importCode from "./importCode.md";
import Link from "@material-docs/core/components/Link";

export default function TableRowAPI() {
    const {lang} = useLang();
    const locale = lang.locale.pages.TableRowAPI;

    return (
        <ApiPage
            name={"TableRow"}
            localeName={"TableRowAPI"}
            overrideName={"MuiTableRow"}
            importCode={importCode}
            properties={[
                {name: "component", type: "elementType", default: "\"tr\"", description: locale.props.component},
                {name: "hover", type: "boolean", default: "false", description: locale.props.hover},
                {name: "selected", type: "boolean", default: "false", description: locale.props.selected},
                {name: "children", type: "node", default: "", description: locale.props.children},
            ]}
            css={[
                {name: "root", global: "MaterialDocs-root", description: locale.css.root},
                {name: "selected", global: "MaterialDocs-selected", description: locale.css.selected},
                {name: "hover", global: "MaterialDocs-hover", description: locale.css.hover},
                {name: "head", global: "MaterialDocs-head", description: locale.css.head},
                {name: "footer", global: "MaterialDocs-footer", description: locale.css.footer},
            ]}
        >
            <H2>Demos</H2>
            <List>
                <ListItem><Link page={["Components", "Tables"]}>Tables</Link></ListItem>
            </List>
        </ApiPage>
    );
}