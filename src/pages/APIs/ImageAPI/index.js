/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";

import {H2, List, ListItem, useLang} from "@material-docs/core";
import ApiPage from "../../../components/ApiPage";
import Link from "@material-docs/core/components/Link/Link";

const importCode = `
import {Image} from "@material-docs/core";
// or
import Image from "@material-docs/core/components/Image";
`.trim();

export default function ImageAPI() {
    const {lang} = useLang();
    const locale = lang.locale.pages.ImageAPI;

    return (
        <ApiPage
            lang={lang}
            name={"Image"}
            localeName={"ImageAPI"}
            overrideName={"MatDoc-Image"}
            importCode={importCode}
            properties={[
                {name: "src", type: "string", default: "", description: locale.props.src},
                {name: "alt", type: "string", default: "", description: locale.props.alt},
                {name: "fullWidth", type: "boolean", default: "false", description: locale.props.fullWidth},
                {name: "children", type: "node", default: "", description: locale.props.children},
            ]}
            css={[
                {name: "root", global: "MatDoc-root", description: locale.css.root},
                {name: "fullWidth", global: "MatDoc-fullWidth", description: locale.css.fullWidth},
            ]}
        >
            <H2>Demos</H2>
            <List>
                <ListItem><Link page={["Components", "Text decorators"]}>Text styling</Link></ListItem>
            </List>
        </ApiPage>
    );
}