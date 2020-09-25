/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {H2, List, ListItem, useLang} from "@material-docs/core";
import ApiPage from "../../../components/ApiPage";

import importCode from "./importCode.md";
import Link from "@material-docs/core/components/Link";

export default function TableHeadAPI() {
    const {lang} = useLang();
    const locale = lang.locale.pages.TableHeadAPI;

    return (
        <ApiPage
            name={"TableHead"}
            localeName={"TableHeadAPI"}
            overrideName={"MuiTableHead"}
            importCode={importCode}
            properties={[
                {name: "component", type: "elementType", default: "\"thead\"", description: locale.props.component},
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