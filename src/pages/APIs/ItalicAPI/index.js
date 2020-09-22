/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";

import {H2, List, ListItem, useLang} from "@material-docs/core";
import ApiPage from "../../../components/ApiPage";
import Link from "@material-docs/core/components/Link/Link";

const importCode = `
import {Italic} from "@material-docs/core";
// or
import Italic from "@material-docs/core/components/Italic";
`.trim();

export default function ItalicAPI() {
    const {lang} = useLang();
    const locale = lang.locale.pages.ItalicAPI;

    return (
        <ApiPage
            name={"Italic"}
            localeName={"ItalicAPI"}
            overrideName={"MatDoc-DemoWithCode"}
            importCode={importCode}
            properties={[
                {name: "children", type: "node", default: "", description: locale.props.children},
            ]}
            css={[
                {name: "root", global: "MatDoc-root", description: locale.css.root},
                {name: "italic", global: "MatDoc-italic", description: locale.css.italic},
            ]}
        >
            <H2>Demos</H2>
            <List>
                <ListItem><Link page={["Components", "Text decorators"]}>Text styling</Link></ListItem>
            </List>
        </ApiPage>
    );
}