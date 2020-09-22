/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {Link} from "@material-ui/core";

import {H2, List, ListItem, useLang} from "@material-docs/core";
import ApiPage from "../../../components/ApiPage";

import importCode from "./importCode.md";

export default function TableHeadAPI() {
    const {lang} = useLang();
    const locale = lang.locale.pages.TableHeadAPI;

    return (
        <ApiPage
            name={"TableHead"}
            localeName={"TableHeadAPI"}
            overrideName={"MatDoc-TableHead"}
            importCode={importCode}
            properties={[
                {name: "component", type: "elementType", default: "\"thead\"", description: locale.props.component},
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