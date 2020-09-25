/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";

import {H2, List, ListItem, useLang} from "@material-docs/core";
import ApiPage from "../../../components/ApiPage";
import Link from "@material-docs/core/components/Link/Link";

import importCode from "./importCode.md";
export default function LinkAPI() {
    const {lang} = useLang();
    const locale = lang.locale.pages.LinkAPI;

    return (
        <ApiPage
            name={"Link"}
            localeName={"LinkAPI"}
            overrideName={"MaterialDocs-Link"}
            importCode={importCode}
            properties={[
                {name: "page", type: "string | string[]", default: "", description: locale.props.page},
                {name: "href", type: "string", default: "", description: locale.props.href},
                {name: "children", type: "node", default: "", description: locale.props.children},
            ]}
            css={[
                {name: "root", global: "MatDoc-root", description: locale.css.root},
            ]}
        >
            <H2>Demos</H2>
            <List>
                <ListItem><Link page={["Components", "Lists"]}>Lists</Link></ListItem>
            </List>
        </ApiPage>
    );
}