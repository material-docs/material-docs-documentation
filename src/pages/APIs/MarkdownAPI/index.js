/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";

import {H2, List, ListItem, useLang} from "@material-docs/core";
import ApiPage from "../../../components/ApiPage";
import Link from "@material-docs/core/components/Link/Link";

import importCode from "./importCode.md";

export default function MarkdownAPI() {
    const {lang} = useLang();
    const locale = lang.locale.pages.MarkdownAPI;

    return (
        <ApiPage
            name={"Markdown"}
            localeName={"MarkdownAPI"}
            overrideName={"MaterialDocs-Markdown"}
            importCode={importCode}
            properties={[
                {name: "inline", type: "boolean", default: "false", description: locale.props.inline},
                {name: "data", type: "object", default: "{}", description: locale.props.data},
                {name: "typographyInheritSize", type: "boolean", default: "false", description: locale.props.typographyInheritSize},
                {name: "locale", type: "string", default: "", description: locale.props.locale},
                {name: "children", type: "node", default: "", description: locale.props.children},
            ]}
            css={[
                {name: "root", global: "MaterialDocs-root", description: locale.css.root},
            ]}
        >
            <H2>Demos</H2>
            <List>
                <ListItem><Link page={["Components", "Markdown"]}>Markdown</Link></ListItem>
            </List>
        </ApiPage>
    );
}