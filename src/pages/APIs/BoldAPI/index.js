/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";

import {H2, List, ListItem, useLang} from "@material-docs/core";
import ApiPage from "../../../components/ApiPage";
import Link from "@material-docs/core/components/Link/Link";

import importCode from "./importCode.md";

export default function BoldAPI() {
    const {lang} = useLang();
    const locale = lang.locale.pages.BoldAPI;

    return (
        <ApiPage
            name={"Bold"}
            overrideName={"MaterialDocs-Bold"}
            localeName={"BoldAPI"}
            importCode={importCode}
            properties={[
                {name: "children", type: "node", default: "", description: locale.props.children},
            ]}
            css={[
                {name: "root", global: "MaterialDocss-root", description: locale.css.root},
                {name: "bold", global: "MaterialDocss-bold", description: locale.css.bold},
            ]}
        >
            <H2>Demos</H2>
            <List>
                <ListItem><Link page={["Components", "Text decorators"]}>Text styling</Link></ListItem>
            </List>
        </ApiPage>
    );
}