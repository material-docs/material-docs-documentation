/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {H2, List, ListItem, useLang} from "@material-docs/core";
import ApiPage from "../../../components/ApiPage";
import Link from "@material-docs/core/components/Link";

const importCode = `
import {Block} from "@material-docs/core";
// or
import Block from "@material-docs/core/components/Block";
`.trim();

export default function BlockAPI() {
    const {lang} = useLang();
    const locale = lang.locale.pages.BlockAPI;

    return (
        <ApiPage
            name={"Block"}
            overrideName={"MatDoc-Block"}
            localeName={"BlockAPI"}
            searchTags={["block", "tip", "slided", "separated", "blockquote", "quote"]}
            importCode={importCode}
            properties={[
                {name: "color", type: "\"dark\" | \"light\"", default: "\"light\"", description: locale.props.color},
                {name: "children", type: "node", default: "", description: locale.props.children},
            ]}
            css={[
                {name: "root", global: "MatDoc-root", description: locale.css.root},
                {name: "colorLight", global: "MatDoc-colorLight", description: locale.css.colorLight},
                {name: "colorDark", global: "MatDoc-colorDark", description: locale.css.colorDark},
            ]}
        >
            <H2>Demos</H2>
            <List>
                <ListItem><Link page={["Components", "Text decorators"]}>Text styling</Link></ListItem>
            </List>
        </ApiPage>
    );
}