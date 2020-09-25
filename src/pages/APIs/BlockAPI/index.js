/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {H2, List, ListItem, useLang} from "@material-docs/core";
import ApiPage from "../../../components/ApiPage";
import Link from "@material-docs/core/components/Link";
import importCode from "./importCode.md";

export default function BlockAPI() {
    const {lang} = useLang();
    const locale = lang.locale.pages.BlockAPI;

    return (
        <ApiPage
            name={"Block"}
            overrideName={"MaterialDocs-Block"}
            localeName={"BlockAPI"}
            searchTags={["block", "tip", "slided", "separated", "blockquote", "quote"]}
            importCode={importCode}
            properties={[
                {name: "color", type: "\"dark\" | \"light\"", default: "\"light\"", description: locale.props.color},
                {name: "children", type: "node", default: "", description: locale.props.children},
            ]}
            css={[
                {name: "root", global: "MaterialDocs-root", description: locale.css.root},
                {name: "colorLight", global: "MaterialDocs-colorLight", description: locale.css.colorLight},
                {name: "colorDark", global: "MaterialDocs-colorDark", description: locale.css.colorDark},
            ]}
        >
            <H2>Demos</H2>
            <List>
                <ListItem><Link page={["Components", "Text decorators"]}>Text styling</Link></ListItem>
            </List>
        </ApiPage>
    );
}