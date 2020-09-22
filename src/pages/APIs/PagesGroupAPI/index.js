/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {Link} from "@material-ui/core";

import {H2, List, ListItem, useLang} from "@material-docs/core";
import ApiPage from "../../../components/ApiPage";

import importCode from "./importCode.md";

export default function PagesGroupAPI() {
    const {lang} = useLang();
    const locale = lang.locale.pages.PagesGroupAPI;

    return (
        <ApiPage
            name={"PagesGroup"}
            localeName={"PagesGroupAPI"}
            overrideName={"MatDoc-PagesGroup"}
            importCode={importCode}
            properties={[
                {name: "name", type: "string", default: "", description: locale.props.name},
                {name: "getData", type: "function(data: PagesGroupData): void", default: "", description: locale.props.code},
                {name: "children", type: "node", default: "", description: locale.props.children},
            ]}
            enableCss={false}
        >
            <H2>Demos</H2>
            <List>
                <ListItem><Link>Lists</Link></ListItem>
            </List>
        </ApiPage>
    );
}