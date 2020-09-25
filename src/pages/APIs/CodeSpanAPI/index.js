/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";

import {H2, List, ListItem, useLang} from "@material-docs/core";
import ApiPage from "../../../components/ApiPage";
import Link from "@material-docs/core/components/Link/Link";

import importCode from "./importCode.md";

export default function CodeSpanAPI() {
    const {lang} = useLang();
    const locale = lang.locale.pages.CodeSpanAPI;

    return (
        <ApiPage
            name={"CodeSpan"}
            overrideName={"MaterialDocs-CodeSpan"}
            localeName={"CodeSpanAPI"}
            importCode={importCode}
            properties={[
                {name: "color", type: "\"default\" | \"primary\" | \"secondary\" | \"grey\"", default: "\"default\"", description: locale.props.color},
                {name: "text", type: "\"white\" | \"black\" | \"inherit\"", default: "\"inherit\"", description: locale.props.text},
                {name: "children", type: "node", default: "", description: locale.props.children},
            ]}
            css={[
                {name: "root", global: "MaterialDocs-root", description: locale.css.root},
                {name: "colorDefault", global: "MaterialDocs-colorDefault", description: locale.css.colorDefault},
                {name: "colorPrimary", global: "MaterialDocs-colorPrimary", description: locale.css.colorPrimary},
                {name: "colorSecondary", global: "MaterialDocs-colorSecondary", description: locale.css.colorSecondary},
                {name: "colorGrey", global: "MaterialDocs-colorGrey", description: locale.css.colorGrey},
                {name: "font", global: "MaterialDocs-font", description: locale.css.font},
                {name: "textInherit", global: "MaterialDocs-textInherit", description: locale.css.textInherit},
                {name: "textWhite", global: "MaterialDocs-textWhite", description: locale.css.textWhite},
                {name: "textBlack", global: "MaterialDocs-textBlack", description: locale.css.textBlack},
            ]}
        >
            <H2>Demos</H2>
            <List>
                <ListItem><Link page={["Components", "Text decorators"]}>Text styling</Link></ListItem>
            </List>
        </ApiPage>
    );
}